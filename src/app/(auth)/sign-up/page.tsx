'use client';

import React from 'react';

import {FormOutlinedLayout, FormLink, FormLinksWrapper} from "@/entities/form-conponents";
import {useSignUpForm} from "@/utils/hooks/useSignUpForm";
import {useRouter} from "next/navigation";
import BackButton from "@/components/BackButton/BackButton";
import TopLayoutSingle from "@/shared/ui/TopLayoutSingle/TopLayoutSingle";
import SignUpForm from "@/features/SignUpForm/SignUpForm";

const SignUp: React.FC = () => {

  const router = useRouter();

  function backNavigate(): void {
    router.back();
  }

  const form = useSignUpForm();

  return (
    <>
      <TopLayoutSingle>
        <BackButton onClick={backNavigate}>Back</BackButton>
      </TopLayoutSingle>
      <FormOutlinedLayout>
        <SignUpForm form={form}>
          <FormLinksWrapper>
            <FormLink href={'/login'}>
              Login
            </FormLink>
          </FormLinksWrapper>
        </SignUpForm>
      </FormOutlinedLayout>
    </>
  );
};

export default SignUp;
