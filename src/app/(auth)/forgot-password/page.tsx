'use client';

import React from 'react';


import { useForgotPassword } from '@/utils/hooks/useForgotPassword';
import {
  FormButton,
  FormMessage,
  FormSubtitle,
  FormTitle,
  FormDivider,
  FormInputsStack, FormOutlinedLayout,
} from "@/entities/form-conponents";
import {useRouter} from "next/navigation";
import BackButton from "@/components/BackButton/BackButton";
import TopLayoutSingle from "@/shared/ui/TopLayoutSingle/TopLayoutSingle";
import {Input} from "@/shared";

const ForgotPassword: React.FC = () => {
  // TODO: should this page be displayed when the user is logged in?
  const router = useRouter();

  const { formik, pending, successMessage, emailErrorMessage, errorMessage } =
    useForgotPassword();

  function backNavigate(): void {
    router.back();
  }

  return (
    <>
      <TopLayoutSingle>
        <BackButton onClick={backNavigate}>Back</BackButton>
      </TopLayoutSingle>
      <FormOutlinedLayout>
        <FormTitle>Forgot password</FormTitle>
        <FormSubtitle>
          Please enter your email address. You will receive a link to create a new
          password via email.
        </FormSubtitle>
        <FormMessage type={"error"}>
          {successMessage == null && errorMessage}
        </FormMessage>
        <FormDivider/>
        {successMessage != null ? (
          <FormMessage type={"success"}>
            { successMessage}
          </FormMessage>
        ) : (
          <>
            <FormInputsStack>
              <Input
                label="Email"
                id="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                errorMessage={emailErrorMessage}
                disabled={pending}
              />
              <FormButton onClick={formik.submitForm} pending={pending}>
                Send email
              </FormButton>
            </FormInputsStack>
          </>
        )}
      </FormOutlinedLayout>
    </>
  );
};

export default ForgotPassword;
