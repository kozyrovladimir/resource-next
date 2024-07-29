import React, { useState } from 'react';

import { AxiosError } from 'axios';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

import * as api from '../../api/api';
import { UserDataI } from '../../models/UserData';
import { setUserData } from '../../store/reducers/user-data.slice';

export function useChangeName(userData: UserDataI): {
  formik: any;
  nameError: boolean;
  nameErrorMessage: string | false | undefined;
  pending: boolean;
  errorMessage: string | undefined;
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
} {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleOpen = (): void => {
    setIsOpen(true);
  };

  const handleClose = (): void => {
    setIsOpen(false);
  };

  const dispatch = useDispatch();

  const [pending, setPending] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const validationSchemaName = yup.object({
    name: yup.string().required('required field!').required('required field!').matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      'Name can only contain Latin letters.'
    ).trim(),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: validationSchemaName,
    onSubmit: values => {
      const castedValues = validationSchemaName.cast(values);
      setPending(true);
      const name = castedValues.name;

      api
        .changeUserName(castedValues.name)
        .then(() => {
          dispatch(
            setUserData({
              userData: {
                ...userData,
                name,
              },
            }),
          );
          handleClose();
        })
        .catch(error => {
          if (error instanceof AxiosError) {
            setErrorMessage(error.message);
          } else {
            setErrorMessage('Something went wrong. Please try again later.');
          }
        })
        .finally(() => {
          values.name = '';
          formik.touched.name = false;
          setPending(false);
        });
    },
  });

  const nameError = formik.touched.name === true && Boolean(formik.errors.name);
  const nameErrorMessage = formik.touched.name === true && formik.errors.name;

  return {
    formik,
    nameError,
    nameErrorMessage,
    pending,
    errorMessage,
    isOpen,
    handleOpen,
    handleClose,
  };
}
