import { useState } from 'react';

import { useFormik } from 'formik';
import * as yup from 'yup';
import {forgotPassword} from "../../api/api";
import {AxiosError} from "axios";

export function useForgotPassword(): any {
  const [pending, setPending] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<string>();

  const validationSchema = yup.object({
    email: yup
      .string()
      .email('please enter a valid email address.')
      .required('required field!')
      .lowercase()
      .trim(),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      const castedValues = validationSchema.cast(values);
      setPending(true);
      const passwordRecoveryRequest = forgotPassword(castedValues.email);

      passwordRecoveryRequest.then(value => {
        setSuccessMessage('We have sent you an email with further instructions. Please check your email.');
      })
        .catch(error => {
          if (error instanceof AxiosError) {
            setErrorMessage(error.message);
          } else {
            setErrorMessage('Something went wrong. Please try again later.');
          }
          if (error.response) {
            setErrorMessage(error.response.data.error);
          }
        })
        .finally(() => {
          values.email = '';
          formik.touched.email = false;
          setPending(false);
        });
    },
  });

  const emailError = formik.touched.email === true && Boolean(formik.errors.email);
  const emailErrorMessage = formik.touched.email === true && formik.errors.email;

  return {
    formik,
    pending,
    successMessage,
    emailError,
    emailErrorMessage,
    errorMessage,
  };
}
