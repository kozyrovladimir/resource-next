import {useFormik} from 'formik';
import * as yup from 'yup';
import {SignUpPaymentFormI} from "@/models/SignUpPaymentForm";
import {useState} from "react";

export function useSignUpPayment(): SignUpPaymentFormI {
  const [pending, setPending] = useState(false);

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
    isInitialValid: false,
    onSubmit: values => {
      // const castedValues = validationSchemaLogin.cast(values);
    },
  });

  const emailError = Boolean(formik.touched.email && formik.errors.email);
  const emailErrorMessage = formik.touched.email ? formik.errors.email : '';
  const nameError = Boolean(formik.touched.name && formik.errors.name);
  const nameErrorMessage = formik.touched.name ? formik.errors.name : '';
  const passwordError =
    Boolean(formik.touched.password && formik.errors.password);
  const passwordErrorMessage = formik.touched.name ? formik.errors.password : '';

  return {
    formik,
    emailError,
    emailErrorMessage,
    passwordError,
    passwordErrorMessage,
    nameError,
    nameErrorMessage,
    pending,
    setPending,
  };
}
