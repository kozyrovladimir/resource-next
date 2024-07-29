import {SetStateAction, useState} from 'react';

import {useFormik} from 'formik';
import * as yup from 'yup';

import * as api from '../../api/api';
import {useDispatch} from "react-redux";
import {userSlice} from "@/store/reducers/user-reducer.slice";
import {fetchUserData} from "@/store/actionCreators/fetchUserData";
import {AppDispatch} from "@/store/store";
import {SignUpFormI} from "../../models/SignUpForm";

export function useSignUpForm(successFunction?: () => void): SignUpFormI {
  const [pending, setPending] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [successMessage, setSuccessMessage] = useState<string>();

  const dispatch = useDispatch<AppDispatch>();
  const {setUser} = userSlice.actions;

  const validationSchemaLogin = yup.object({
    email: yup
      .string()
      .email('please enter a valid email address.')
      .required('required field!')
      .lowercase()
      .trim(),
    name: yup.string().required('required field!').required('required field!').matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      'Name can only contain Latin letters.'
    ).trim(),
    password: yup.string().required('required field!').trim(),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
    },
    validationSchema: validationSchemaLogin,
    onSubmit: values => {
      const castedValues = validationSchemaLogin.cast(values);
      setPending(true);
      api
        .signUp(castedValues.email, castedValues.name, castedValues.password)
        .then()
        .then(() => {
          // @ts-expect-error
          api.login(castedValues.email, castedValues.password).then((response: {
            data: { token: string }
          }) => {
            Boolean(response.data.token) &&
            //here we need to dispatch fetchUserData to update user data
            dispatch(fetchUserData())
            dispatch(setUser(true))
            setSuccessMessage('You have successfully registered')
            // if successFunction is passed, call it
            if (successFunction) {
              successFunction();
            }
          }).catch(
            (error: {
              response: { data: { message: SetStateAction<string | undefined> } | any };
            }) => {
              if (error?.response?.data.message) {
                setErrorMessage(error.response.data.message);
              } else {
                setErrorMessage(
                  'Server side is not available right now.',
                );
              }
            },
          )
        })
        .catch(
          (error: {
            response: {
              status: number;
              data: { error: SetStateAction<string | undefined> | any };
            };
          }) => {
            if (error?.response?.status === 409) {
              setErrorMessage(error.response.data.error);
            } else {
              setErrorMessage(
                'Server side is not available right now.',
              );
            }
          },
        )
        .finally(() => {
          values.email = '';
          values.name = '';
          values.password = '';
          formik.touched.email = false;
          formik.touched.name = false;
          formik.touched.password = false;
          setPending(false);
        });
    },
  });

  const emailError = Boolean(formik.touched.email && formik.errors.email);
  const emailErrorMessage = formik.touched.email ? formik.errors.email : '';
  const nameError = Boolean(formik.touched.name && formik.errors.name);
  const nameErrorMessage = formik.touched.name ? formik.errors.name : '';
  const passwordError =
    Boolean(formik.touched.password && formik.errors.password);
  const passwordErrorMessage = formik.touched.name ? formik.errors.password : '';

  const resetForm = () => {
    formik.resetForm({
      values: {
        email: '',
        name: '',
        password: '',
      },

    })
    // reset error and success messages
    setErrorMessage(undefined);
    setSuccessMessage(undefined);
  }

  return {
    formik,
    pending,
    errorMessage,
    successMessage,
    emailError,
    emailErrorMessage,
    passwordError,
    passwordErrorMessage,
    nameError,
    nameErrorMessage,
    resetForm,
  };
}
