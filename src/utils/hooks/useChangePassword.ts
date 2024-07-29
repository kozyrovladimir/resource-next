import React, {useEffect, useState} from 'react';

import { AxiosError } from 'axios';
import { useFormik } from 'formik';
import * as yup from 'yup';

import * as api from '../../api/api';

interface ChangePasswordI {
  formik: any;
  isOldPasswordHasError: boolean;
  oldPasswordErrorMessage: string | false | undefined;
  isNewPasswordHasError: boolean;
  newPasswordErrorMessage: string | false | undefined;
  isConfirmPasswordHasError: boolean;
  confirmPasswordErrorMessage: string | false | undefined;
  pending: boolean;
  formErrorMessage: string | undefined;
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  visibilityOldPassword: boolean;
  visibilityNewPassword: boolean;
  handleClickShowNewPassword: () => void;
  handleClickShowOldPassword: () => void;
}

export function useChangePassword(): ChangePasswordI {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [visibilityOldPassword, setVisibilityOldPassword] =
    React.useState<boolean>(false);
  const [visibilityNewPassword, setVisibilityNewPassword] =
    React.useState<boolean>(false);

  const handleClickShowNewPassword = (): void => {
    setVisibilityNewPassword(!visibilityNewPassword);
  };

  const handleClickShowOldPassword = (): void => {
    setVisibilityOldPassword(!visibilityOldPassword);
  };

  const handleOpen = (): void => {
    setIsOpen(true);
  };

  const handleClose = (): void => {
    setIsOpen(false);
  };

  const [pending, setPending] = useState<boolean>(false);
  const [formErrorMessage, setFormErrorMessage] = useState<string>();

  const validationSchemaName = yup.object({
    old_password: yup.string().required('required field!').trim(),
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
      old_password: '',
      new_password: '',
      confirm_password: '',
    },
    validationSchema: validationSchemaName,
    onSubmit: values => {
      setPending(true);
      api
        .changeUserPassword(values.old_password, values.confirm_password)
        .then(() => {
          void formik.setValues({
            old_password: '',
            new_password: '',
            confirm_password: '',
          });
          void formik.setTouched({
            old_password: false,
            new_password: false,
            confirm_password: false,
          });
          handleClose();
        })
        .catch(error => {
          if (error instanceof AxiosError) {
            error.response?.data?.message ?
            setFormErrorMessage(error.response?.data?.message) :
            setFormErrorMessage(error.message);
          } else {
            setFormErrorMessage('Something went wrong. Please try again later.');
          }
        })
        .finally(() => {
          setPending(false);
        });
    },
  });

  const isOldPasswordHasError =
    formik.touched.old_password === true && Boolean(formik.errors.old_password);
  const oldPasswordErrorMessage =
    formik.touched.old_password === true && formik.errors.old_password;

  const isNewPasswordHasError =
    formik.touched.new_password === true && Boolean(formik.errors.new_password);
  const newPasswordErrorMessage =
    formik.touched.new_password === true && formik.errors.new_password;

  const isConfirmPasswordHasError =
    formik.touched.confirm_password === true && Boolean(formik.errors.confirm_password);
  const confirmPasswordErrorMessage =
    formik.touched.confirm_password === true && formik.errors.confirm_password;

  useEffect(() => {
    return () => {
      setFormErrorMessage(undefined);
    }
  },[isOpen])

  return {
    formik,
    isOldPasswordHasError,
    oldPasswordErrorMessage,
    isNewPasswordHasError,
    newPasswordErrorMessage,
    isConfirmPasswordHasError,
    confirmPasswordErrorMessage,
    pending,
    formErrorMessage,
    isOpen,
    handleOpen,
    handleClose,
    visibilityOldPassword,
    visibilityNewPassword,
    handleClickShowNewPassword,
    handleClickShowOldPassword,
  };
}
