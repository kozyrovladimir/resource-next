import React from 'react';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

import {
  FormInputsStack,
  FormTitle,
  FormDivider,
} from "@/entities/form-conponents";
import {SignUpPaymentFormI} from "@/models/SignUpPaymentForm";
import {Input} from "@/shared";

interface SignUpFormProps {
  children?: React.ReactNode;
  form: SignUpPaymentFormI;
}

const SignUpPaymentForm: React.FC<SignUpFormProps> = ({

                                                 children,
                                                 form
                                               }) => {

  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const handleClickShowPassword = (): void => {
    setShowPassword(prevState => !prevState);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
  };

  const {
    formik,
    emailErrorMessage,
    passwordErrorMessage,
    nameErrorMessage,
    pending
  } = form;

  return (
    <>
      <FormTitle>Create an account</FormTitle>
      <FormDivider/>
      <FormInputsStack>
        <Input
          id="email"
          type={'email'}
          label={'Email'}
          autoComplete={'email'}
          value={formik.values.email}
          onChange={formik.handleChange}
          errorMessage={emailErrorMessage}
          disabled={pending}
        />
        <Input
          id="name"
          type={'text'}
          label={'Name'}
          autoComplete={'name'}
          value={formik.values.name}
          onChange={formik.handleChange}
          errorMessage={nameErrorMessage}
          disabled={pending}
        />
        <Input
          disabled={pending}
          autoComplete={'current-password'}
          id="password"
          type={showPassword ? 'text' : 'password'}
          value={formik.values.password}
          onChange={formik.handleChange}
          errorMessage={passwordErrorMessage}
          label="Password"
          iconEnd={
            <IconButton
              sx={{mr: 0}}
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff/> : <Visibility/>}
            </IconButton>
          }
        />
      </FormInputsStack>
      {children}
    </>
  )
    ;
};

export default SignUpPaymentForm;
