import {SetStateAction, useState} from 'react';

import {useFormik} from 'formik';
import * as yup from 'yup';
import {subscribeHere} from "@/shared/api/api";

export function useSubscribeHereForm() {
  const [pending, setPending] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [successMessage, setSuccessMessage] = useState<string>();

  const validationSchema = yup.object({
    email: yup
      .string()
      .email('please enter a valid email address.')
      .required('required field!')
      .lowercase()
      .trim(),
    name: yup.string().required('required field!').trim(),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      const castedValues = validationSchema.cast(values);
      setPending(true);
      subscribeHere(castedValues.name, castedValues.email)
        .then((response) => {
          setSuccessMessage(response.data.message);
          setErrorMessage(undefined);
        })
        .catch(
          (error: {
            response: { data: { message: SetStateAction<string | undefined> } };
          }) => {
            if (error?.response?.data.message) {
              setErrorMessage(error.response.data.message);
            } else {
              setErrorMessage(
                'Server side is not available right now',
              );
            }
          },
        )
        .finally(() => {
          values.email = '';
          values.name = '';
          formik.touched.email = false;
          formik.touched.name = false;
          setPending(false);
        });
    },
  });

  const emailError = formik.touched.email === true && Boolean(formik.errors.email);
  const emailErrorMessage = formik.touched.email === true && formik.errors.email;
  const nameError =
    formik.touched.name === true && Boolean(formik.errors.name);
  const nameErrorMessage = formik.touched.name === true && formik.errors.name;

  return {
    formik,
    pending,
    errorMessage,
    emailError,
    emailErrorMessage,
    nameError,
    nameErrorMessage,
    successMessage
  };
}
