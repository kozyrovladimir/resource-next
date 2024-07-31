import React from 'react';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

import {useIsAuthorised} from '@/utils/hooks/useIsAuthorised';

import {
  FormButton,
  FormMessage,
  FormSubtitle,
  FormTitle,
  FormInputsStack, FormDivider
} from "@/entities/form-conponents";
import {Input} from "@/shared";
import {UseLoginFormI} from "@/models/LogInForm";

interface State {
  showPassword: boolean;
}

interface LogInFormProps {
  children?: React.ReactNode;
  withTitle?: boolean; // for modal
  subTitle?: string;  // for modal
  form: UseLoginFormI;
}

const LogInForm: React.FC<LogInFormProps> = ({
                                               children,
                                               form, withTitle = true,
                                               subTitle,
                                             }) => {
  const {
    formik,
    pending,
    errorMessage,
    emailErrorMessage,
    passwordErrorMessage,
  } = form;
  const [values, setValues] = React.useState<State>({
    showPassword: false,
  });
  const handleClickShowPassword = (): void => {
    setValues({
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
  };

  const isAuthorised = useIsAuthorised();

  return (
    <>
      {withTitle && <FormTitle>Log In</FormTitle>}
      <FormSubtitle>{subTitle ? subTitle : 'Welcome back! Sign in to your account.'}</FormSubtitle>
      <FormMessage type={"error"}>{errorMessage}</FormMessage>
      <FormDivider/>
      {
        isAuthorised ? (
            <FormMessage type={"success"}>
              You are logged in
            </FormMessage>
          )
          :
          (
            <>
              <FormInputsStack>
                <Input
                  id="email"
                  type="email"
                  label="Email"
                  autoComplete={'email'}
                  errorMessage={emailErrorMessage}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  disabled={pending}
                />
                <Input
                  disabled={pending}
                  id="password"
                  type={values.showPassword ? 'text' : 'password'}
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
                      {!values.showPassword ? <VisibilityOff/> : <Visibility/>}
                    </IconButton>
                  }
                />
                <FormButton onClick={formik.submitForm} pending={pending}>
                  Login
                </FormButton>
              </FormInputsStack>
              {children}
            </>
          )
      }
    </>
  );
};

export default LogInForm;
