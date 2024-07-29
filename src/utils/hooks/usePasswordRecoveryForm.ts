import React, { useState } from 'react';

import { AxiosError } from 'axios';
import { useFormik } from 'formik';
import * as yup from 'yup';

import * as api from '../../api/api';

interface usePasswordRecoveryFormI {
  formik: any;
  isNewPasswordHasError: boolean;
  newPasswordErrorMessage: string | false | undefined;
  isConfirmPasswordHasError: boolean;
  confirmPasswordErrorMessage: string | false | undefined;
  pending: boolean;
  formErrorMessage: string | undefined;
  formSuccessMessage: string | undefined;
  visibilityNewPassword: boolean;
  visibilityConfirmPassword: boolean;
  handleClickShowNewPassword: () => void;
  handleClickShowConfirmPassword: () => void;
}

export function usePasswordRecoveryForm(token: string): usePasswordRecoveryFormI {
  const [visibilityConfirmPassword, setVisibilityConfirmPassword] =
    React.useState<boolean>(false);
  const [visibilityNewPassword, setVisibilityNewPassword] =
    React.useState<boolean>(false);

  const handleClickShowNewPassword = (): void => {
    setVisibilityNewPassword(!visibilityNewPassword);
  };

  const handleClickShowConfirmPassword = (): void => {
    setVisibilityConfirmPassword(!visibilityConfirmPassword);
  };

  const [pending, setPending] = useState<boolean>(false);
  const [formErrorMessage, setFormErrorMessage] = useState<string>();
  const [formSuccessMessage, setFormSuccessMessage] = useState<string>();

  const validationSchema = yup.object({
    new_password: yup
      .string()
      .required('required field!')
      .oneOf([yup.ref('confirm_password')], 'Passwords must match')
      .trim(),
    confirm_password: yup
      .string()
      .required('required field!')
      .oneOf([yup.ref('new_password')], 'Passwords must match')
      .trim(),
  });

  const formik = useFormik({
    initialValues: {
      new_password: '',
      confirm_password: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      const castedValues = validationSchema.cast(values);
      setPending(true);
      api
        .resetPassword(castedValues.confirm_password, token)
        .then(() => {
          setFormSuccessMessage('Password has been changed successfully');
        })
        .catch(error => {
          if (error instanceof AxiosError) {
            setFormErrorMessage(error.message);
          } else {
            setFormErrorMessage('Something went wrong. Please try again later.');
          }
          if (error.response) {
            setFormErrorMessage(error.response.data.message);
          }
        })
        .finally(() => {
          values.new_password = '';
          values.confirm_password = '';

          formik.touched.new_password = false;
          formik.touched.confirm_password = false;

          setPending(false);
        });
    },
  });

  const isNewPasswordHasError =
    formik.touched.new_password === true && Boolean(formik.errors.new_password);
  const newPasswordErrorMessage =
    formik.touched.new_password === true && formik.errors.new_password;

  const isConfirmPasswordHasError =
    formik.touched.confirm_password === true && Boolean(formik.errors.confirm_password);
  const confirmPasswordErrorMessage =
    formik.touched.confirm_password === true && formik.errors.confirm_password;

  return {
    formik,
    isNewPasswordHasError,
    newPasswordErrorMessage,
    isConfirmPasswordHasError,
    confirmPasswordErrorMessage,
    pending,
    formErrorMessage,
    formSuccessMessage,
    visibilityNewPassword,
    visibilityConfirmPassword,
    handleClickShowNewPassword,
    handleClickShowConfirmPassword,
  };
}
