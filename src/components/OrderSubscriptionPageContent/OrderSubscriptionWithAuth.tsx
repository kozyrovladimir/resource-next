"use client";

import React, {useEffect} from 'react';

import StripePaymentForm from './components/StripePaymentForm';
import {PaymentPeriodT} from "./OrderSubscription";
import {useIsAuthorised} from "@/utils/hooks/useIsAuthorised";
import styles from "./OrderSubscriptionWithAuth.module.scss";
import {
  FormLink,
  FormLinksWrapper,
  FormOutlinedLayout,
  FormPaymentOutlinedLayout
} from "@/entities/form-conponents";
import {useLoginForm} from "@/utils/hooks/useLoginForm";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";
import StripeFormElementsProvider from "./components/StripeFormElementsProvider";
import {useSignUpPayment} from "@/utils/hooks/useSignUpPayment";
import {useParams, useRouter} from "next/navigation";
import BackButton from "@/components/BackButton/BackButton";
import {useGetUserData} from "@/utils/hooks/useGetUserData";
import {Stack} from "@mui/material";
import {UserDialog} from "@/shared";
import SignUpPaymentForm from "@/components/SignUpPaymentForm/SignUpPaymentForm";
import LogInPaymentForm from "@/components/LogInPaymentForm/LogInPaymentForm";
import TopLayout from "@/shared/ui/TopLayout/TopLayout";
import PaymentPageGridContainer
  from "@/components/PaymentPageGridContainer/PaymentPageGridContainer";
import Loader from "@/components/Loader/Loader";

const OrderSubscriptionWithAuth = () => {
  const router = useRouter();
  // @ts-ignore
  const {plan} = useParams();

  const isAuthorised = useIsAuthorised();
  const {isLoading} = useGetUserData();

  const signUpForm = useSignUpPayment();
  const logInForm = useLoginForm();

  // switch forms logic
  const [logInFormIsVisible, setLogInFormIsVisible] = React.useState<boolean>(false);
  const logInOnClick = () => {
    setLogInFormIsVisible(true);
  }

  const bannerText = (): string => {
    switch (plan) {
      case 'year':
        return '12 MONTHS PRACTICE SUBSCRIPTION';
      case 'month6':
        return '6 MONTHS PRACTICE SUBSCRIPTION';
      case 'month':
        return '1 MONTH PRACTICE SUBSCRIPTION';
      default:
        return 'CHOOSE YOUR PRACTICE PLAN';
    }
  };

  useEffect(() => {
    if (plan === undefined) {
      router.push('/subscription-plans');
    }

    if (
      plan !== 'year' &&
      plan !== 'month' &&
      plan !== 'month6'
    ) {
      router.push('/subscription-plans');
    }
  }, [plan]);

  // if user data is loading
  if (isLoading) {
    return (
      <Stack maxHeight={'40vh'} justifyContent={'center'} alignItems={'center'}
             padding={'40px'}>
        <Loader/>
      </Stack>
    )
  }

  if (isAuthorised) {
    // real payment form
    return (
      <>
        <TopLayout
          title={bannerText()}
          left={<BackButton
            onClick={() => router.push('/subscription-plans')}>Back</BackButton>}
        />
        <PaymentPageGridContainer>
          <FormPaymentOutlinedLayout>
            <StripePaymentForm period={plan as PaymentPeriodT}/>
          </FormPaymentOutlinedLayout>
        </PaymentPageGridContainer>
      </>
    );
  }

  // mockup payment form with auth
  return (
    <>
      {/*Log in modal*/}
      <UserDialog
        title={'Log in'}
        text={'Welcome back! Sign in to your account.'}
        open={logInFormIsVisible}
        onClose={() => setLogInFormIsVisible(false)}
      >
        <LogInPaymentForm form={logInForm}>
          <FormLinksWrapper>
            <FormLink href={'/forgot-password'}>
              I forgot my password
            </FormLink>
          </FormLinksWrapper>
        </LogInPaymentForm>
      </UserDialog>
      {/*end Log in modal*/}
      <TopLayout
        title={bannerText()}
        left={<BackButton
          onClick={() => router.push('/subscription-plans')}>Back</BackButton>}
      />
      <PaymentPageGridContainer>
        <FormOutlinedLayout>
          <SignUpPaymentForm form={signUpForm}>
            <div className={styles.switcher}>
              <span>Already a user? </span>
              <span className={styles.switcherText}
                    onClick={() => logInOnClick()}>Login</span>
            </div>
          </SignUpPaymentForm>
        </FormOutlinedLayout>
        <FormPaymentOutlinedLayout>
          <StripeFormElementsProvider>
            <CheckoutForm
              period={plan as PaymentPeriodT}
              form={signUpForm}
            />
          </StripeFormElementsProvider>
        </FormPaymentOutlinedLayout>
      </PaymentPageGridContainer>
    </>
  );
}

export default OrderSubscriptionWithAuth;
