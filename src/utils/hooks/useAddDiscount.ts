import { useState } from 'react';

import { AxiosError } from 'axios';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {applyDiscount} from "@/api/api";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/store/store";
import {setDiscount} from "@/store/reducers/discount.slice";

//TODO: add validation for discount code
export function useAddDiscount(period: string) {

  const [pending, setPending] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [successMessage, setSuccessMessage] = useState<string | string[]>();

  const dispatch = useDispatch<AppDispatch>();

  const validationSchema = yup.object({
    discount: yup.string().required('Empty field.').trim(),
  });

  const formik = useFormik({
    initialValues: {
      discount: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      setErrorMessage(undefined);
      const castedValues = validationSchema.cast(values);
      setPending(true);
      applyDiscount(castedValues.discount, period)
        .then((response) => {
          setSuccessMessage(response.data.message)
          dispatch(setDiscount({discountCode: castedValues.discount, message: response.data.message, payment_required: response.data.payment_required}))
        })
        .catch(error => {
          if (error instanceof AxiosError) {
            error.response?.data?.message ?
              setErrorMessage(error.response?.data?.message) :
              setErrorMessage(error.message);
          } else {
            setErrorMessage('Something went wrong. Please try again later.');
          }
        })
        .finally(() => {
          values.discount = '';
          formik.touched.discount = false;
          setPending(false);
        });
    },
  });

  const discountError = formik.touched.discount === true && Boolean(formik.errors.discount);
  const discountErrorMessage = formik.touched.discount === true && formik.errors.discount;

  return {
    formik,
    discountError,
    discountErrorMessage,
    pending,
    errorMessage,
    successMessage,
  };
}

export type IUseAddDiscount = ReturnType<typeof useAddDiscount>;
