import React from 'react';
import {UseLoginFormI} from "@/models/LogInForm";
import {
  FormButton,
  FormInputsStack,
  FormMessage,
} from "@/entities/form-conponents";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import {Input} from "@/shared";

interface State {
  showPassword: boolean;
}

interface LogInPaymentFormProps {
  children?: React.ReactNode;
  form: UseLoginFormI;
}

const LogInPaymentForm: React.FC<LogInPaymentFormProps> = ({form, children}) => {
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

  return (
    <>
      {errorMessage && <FormMessage type={"error"}>{errorMessage}</FormMessage>}
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
  );
};

export default LogInPaymentForm;
