import {SetStateAction, useState} from 'react';

import {useFormik} from 'formik';
import {useDispatch} from 'react-redux';
import * as yup from 'yup';

import {api} from '@/shared';
import {userSlice} from '@/store/reducers/user-reducer.slice';
import {fetchUserData} from "@/store/actionCreators/fetchUserData";
import {AppDispatch} from "@/store/store";
import {UseLoginFormI} from "@/models/LogInForm";

export function useLoginForm(successFunction?: () => void): UseLoginFormI {
  const dispatch = useDispatch<AppDispatch>();
  const {setUser} = userSlice.actions;

  const [pending, setPending] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const validationSchemaLogin = yup.object({
    email: yup
      .string()
      .email('please enter a valid email address.')
      .required('required field!')
      .lowercase()
      .trim(),
    password: yup.string().required('required field!').trim(),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchemaLogin,
    onSubmit: values => {
      const castedValues = validationSchemaLogin.cast(values);
      setPending(true);
      api
        .login(castedValues.email, castedValues.password)
        .then((response) => {
          dispatch(setUser(true)) &&
          dispatch(fetchUserData());
          setErrorMessage(undefined);
          // if successFunction is passed, call it
          if (successFunction) {
            successFunction();
          }
        })
        .catch(
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
        .finally(() => {
          values.email = '';
          values.password = '';
          formik.touched.email = false;
          formik.touched.password = false;
          setPending(false);
        });
    },
  });

  const emailError = Boolean(formik.touched.email && formik.errors.email);
  const emailErrorMessage = formik.touched.email ? formik.errors.email : '';
  const passwordError = Boolean(formik.touched.password && formik.errors.password);
  const passwordErrorMessage = formik.touched.password ? formik.errors.password : '';

  const resetForm = () => {
    formik.resetForm({
      values: {
        email: '',
        password: '',
      },
    });
    // reset error message
    setErrorMessage(undefined);
  }

  return {
    formik,
    pending,
    errorMessage,
    emailError,
    emailErrorMessage,
    passwordError,
    passwordErrorMessage,
    resetForm,
  };
}
