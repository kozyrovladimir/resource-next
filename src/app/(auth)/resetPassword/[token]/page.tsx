'use client';

import React from 'react';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

import {usePasswordRecoveryForm} from "@/utils/hooks/usePasswordRecoveryForm";

import {
  FormButton,
  FormDivider,
  FormInputsStack,
  FormOutlinedLayout,
  FormLink,
  FormLinksWrapper,
  FormMessage,
  FormSubtitle,
  FormTitle
} from "@/entities/form-conponents";
import {useParams, useRouter} from "next/navigation";
import BackButton from "@/components/BackButton/BackButton";
import TopLayoutSingle from "@/shared/ui/TopLayoutSingle/TopLayoutSingle";
import {Input} from "@/shared";

const PasswordRecovery: React.FC = () => {

  // @ts-ignore
  const {token} = useParams();

  const {
    formik,
    newPasswordErrorMessage,
    confirmPasswordErrorMessage,
    pending,
    formErrorMessage,
    formSuccessMessage,
    visibilityNewPassword,
    visibilityConfirmPassword,
    handleClickShowNewPassword,
    handleClickShowConfirmPassword,
  } = usePasswordRecoveryForm(token as string || '');

  // const navigate = useNavigate();
  const router = useRouter();

  function backNavigate(): void {
    router.back();
  }

  return (
    <>
      <TopLayoutSingle>
        <BackButton onClick={backNavigate}>Back</BackButton>
      </TopLayoutSingle>
      <FormOutlinedLayout>
        <FormTitle>SET NEW PASSWORD</FormTitle>
        <FormSubtitle>Please enter and confirm new password</FormSubtitle>
        <FormMessage type={"error"}>
          {formSuccessMessage == null && formErrorMessage}
        </FormMessage>
        <FormDivider/>
        {formSuccessMessage != null ? (
          <FormMessage type={"success"}>
            {formSuccessMessage}
          </FormMessage>
        ) : (
          <>
            <FormInputsStack>
              <Input
                id={'new_password'}
                label={'Password'}
                type={visibilityNewPassword ? 'text' : 'password'}
                value={formik.values.new_password}
                onChange={formik.handleChange}
                errorMessage={newPasswordErrorMessage as any}
                disabled={pending}
                iconEnd={
                  <IconButton
                    sx={{mr: 0}}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowNewPassword}
                    edge="end"
                  >
                    {!visibilityNewPassword ? <VisibilityOff/> : <Visibility/>}
                  </IconButton>
                }
              />
              <Input
                id={'confirm_password'}
                label={'Confirm password'}
                type={visibilityConfirmPassword ? 'text' : 'password'}
                value={formik.values.confirm_password}
                onChange={formik.handleChange}
                errorMessage={confirmPasswordErrorMessage as any}
                disabled={pending}
                iconEnd={
                  <IconButton
                    sx={{mr: 0}}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirmPassword}
                    edge="end"
                  >
                    {!visibilityConfirmPassword ? <VisibilityOff/> : <Visibility/>}
                  </IconButton>
                }
              />
              <FormButton onClick={formik.submitForm} pending={pending}>
                Set new password
              </FormButton>
            </FormInputsStack>
          </>
        )}
        <FormLinksWrapper>
          <FormLink href={'/login'}>
            Login
          </FormLink>
        </FormLinksWrapper>
      </FormOutlinedLayout>
    </>
  );
};

export default PasswordRecovery;
