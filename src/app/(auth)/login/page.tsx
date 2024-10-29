'use client';

import React, {useEffect} from 'react';

import {useIsAuthorised} from '@/utils/hooks/useIsAuthorised';
import {FormOutlinedLayout, FormLink, FormLinksWrapper} from "@/entities/form-conponents";
import {useLoginForm} from "@/utils/hooks/useLoginForm";
import {useRouter} from "next/navigation";
import LogInForm from "@/features/LogInForm/LogInForm";
import BackButton from "@/components/BackButton/BackButton";
import TopLayoutSingle from "@/shared/ui/TopLayoutSingle/TopLayoutSingle";

const LogIn: React.FC = () => {
  const router = useRouter();
  const userIsAuthorised = useIsAuthorised();

  const form = useLoginForm();

  useEffect(() => {
    if (userIsAuthorised) {
      router.push('/');
    }
  }, [userIsAuthorised]);

  function backNavigate(): void {
    router.back();
  }

  return (
    <>
      <TopLayoutSingle>
        <BackButton onClick={backNavigate}>Back</BackButton>
      </TopLayoutSingle>
      <FormOutlinedLayout>
        <LogInForm form={form}>
          <FormLinksWrapper>
            <FormLink href={'/forgot-password'}>
              I forgot my password
            </FormLink>
            <FormLink href={'/sign-up'}>
              Sign up
            </FormLink>
          </FormLinksWrapper>
        </LogInForm>
      </FormOutlinedLayout>
    </>
  );
};

export default LogIn;

