import React from 'react';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

import {
  FormButton, FormInputsStack, FormLink,
  FormLinksWrapper,
  FormMessage,
  FormSubtitle,
  FormTitle,
  FormDivider,
} from "@/entities/form-conponents";
import {Input} from "@/shared";
import {SignUpFormI} from "@/models/SignUpForm";

interface SignUpFormProps {
  children?: React.ReactNode;
  form: SignUpFormI;
  withTitle?: boolean; // for modal
  subTitle?: string; // for modal
}

const SignUpForm: React.FC<SignUpFormProps> = ({

                                                 children,
                                                 form, withTitle = true, subTitle
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
    pending,
    errorMessage,
    successMessage,
    emailErrorMessage,
    passwordErrorMessage,
    nameErrorMessage,
  } = form;

  if (successMessage) {
    return (
      <>
        {withTitle && <FormTitle>Sign Up</FormTitle>}
        <FormSubtitle>{subTitle ? subTitle : 'Create an account.'}</FormSubtitle>
        <div style={{height: '1.5rem'}}></div>
        <FormDivider/>
        <FormMessage type={"success"}>
          {successMessage}
        </FormMessage>
        <FormLinksWrapper>
          <FormLink href={'/subscription-plans'}>
            Choose subscription plan.
          </FormLink>
        </FormLinksWrapper>
      </>
    )
  }

  return (
    <>
      {withTitle &&<FormTitle>Sign Up</FormTitle>}
      <FormSubtitle>{subTitle ? subTitle : 'Create an account.'}</FormSubtitle>
      <FormMessage type={"error"}>
        {errorMessage}
      </FormMessage>
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
        <FormButton onClick={formik.submitForm} pending={pending}>
          Sign Up
        </FormButton>
      </FormInputsStack>
      {children}
    </>
  )
    ;
};

export default SignUpForm;
