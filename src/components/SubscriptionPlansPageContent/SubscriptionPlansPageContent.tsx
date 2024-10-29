"use client";

import React, {useEffect, useRef} from 'react';

import benefit_1 from '../../assets/images/subscription-plans/benefit_1.png';
import benefit_2 from '../../assets/images/subscription-plans/benefit_2.png';
import benefit_3 from '../../assets/images/subscription-plans/benefit_3.png';
import benefit_4 from '../../assets/images/subscription-plans/benefit_4.png';

import s from './SubscriptionPlansPageContent.module.scss';

import Image from 'next/image';

import BackButton from '@/components/BackButton/BackButton';
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/store/store";
import SubscribeHere from "@/components/SubscribeHere/SubscribeHere";
import {useIsAuthorised} from "@/utils/hooks/useIsAuthorised";
import {useFetchUserData} from "@/utils/hooks/useFetchUserData";
import {
  FormLink,
  FormLinksWrapper,
  FormUnderlineText
} from "@/entities/form-conponents";
import {useLoginForm} from "@/utils/hooks/useLoginForm";
import {useSignUpForm} from "@/utils/hooks/useSignUpForm";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {clearDiscount} from "@/store/reducers/discount.slice";
import {Button, UserDialog} from "@/shared";
import SignUpForm from "@/features/SignUpForm/SignUpForm";
import LogInForm from "@/features/LogInForm/LogInForm";

interface SubscriptionProps {
  subscriptionPeriod: string;
  subscriptionType: 'month' | 'month6' | 'year';
  price: string;
  note?: string;
  pricePerMonth: string;
  isAuthorised: boolean;
}

const PriceCard: React.FC<SubscriptionProps> = props => {
  const buttonVariant = props.subscriptionType !== 'month6' ? 'outlined' : 'primary';

  const router = useRouter();

  const [open, setOpen] = React.useState(false);
  const [isLoginForm, setIsLoginForm] = React.useState(false);

  const loginForm = useLoginForm(() => router.push(`/subscription-plans/${props.subscriptionType}`));
  const signUpForm = useSignUpForm(() => router.push(`/subscription-plans/${props.subscriptionType}`));

  const onClose = () => {
    setOpen(false);
    loginForm.resetForm();
    signUpForm.resetForm();
  }

  return (
    <>
      {/*dialog*/}
      <UserDialog
        open={open}
        onClose={onClose}
        title={isLoginForm ? "Log in" : "Sign up"}
      >
        {isLoginForm ? (
          <LogInForm
            withTitle={false}
            form={loginForm}
            subTitle={"Please log in or sign up to continue."}
          >
            <FormLinksWrapper>
              <FormLink href={'/forgot-password'}>
                I forgot my password
              </FormLink>
              <FormUnderlineText onClick={() => setIsLoginForm(false)}>
                Sign up
              </FormUnderlineText>
            </FormLinksWrapper>
          </LogInForm>
        ) : (
          <SignUpForm
            withTitle={false}
            form={signUpForm}
            subTitle={"Please log in or sign up to continue."}
          >
            <FormLinksWrapper>
              <FormUnderlineText onClick={() => setIsLoginForm(true)}>
                Log in
              </FormUnderlineText>
            </FormLinksWrapper>
          </SignUpForm>
        )}
      </UserDialog>
      {/*end dialog*/}
      <div className={s.priceCard}>
        <div className={s.priceCardPeriod}>
          {props.subscriptionPeriod}
        </div>
        {/*<div className={s.priceCardNotePlainText}>*/}
        {/*  {props.note}*/}
        {/*</div>*/}
        <div className={s.priceCardPrice}>
          {props.price}
        </div>
        <div className={s.priceCardPerMonth}>
          {props.pricePerMonth}
        </div>
        {props.isAuthorised ? (
          <Link href={`/subscription-plans/${props.subscriptionType}`}
                className={s.priceCardLink}>
            <Button fullWidth={true} variant={buttonVariant}>GET THIS PLAN</Button>
          </Link>
        ) : (
          <Button fullWidth={true} variant={buttonVariant} onClick={() => setOpen(true)}>GET
            THIS PLAN</Button>
        )}
      </div>
    </>
  );
};

const SubscriptionPlansPageContent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const middleDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    middleDivRef.current?.scrollIntoView({inline: 'center'});
    dispatch(dispatch(clearDiscount()))
  }, []);

  const isAuthorised = useIsAuthorised();
  const userStatus = useFetchUserData();

  const router = useRouter();

  return (
    <>
      <div className={s.backButtonContainer}>
        <BackButton onClick={() => router.back()}>Back</BackButton>
      </div>
      {/*only for mobile */}
      <div className={s.mobileTopContentTitle}>
        <h2>
          CHOOSE YOUR PRACTICE PLAN
        </h2>
      </div>
      {/*only for desktop */}
      <div className={s.topContent}>
        <div className={s.topContentTitle}>
          <h2>
            CHOOSE YOUR PRACTICE PLAN
          </h2>
        </div>
        <div className={s.topContentDescripton}>
          <span>
          A video library of Qigong, yoga and energy routines designed to guide you through the seasons and move your practice to the next level.
        </span>
        </div>
      </div>
      {/*only for mobile */}
      <div className={s.mobileTopContentDescripton}>
          <span>
          A video library of Qigong, yoga and energy routines designed to guide you through the seasons and move your practice to the next level.
        </span>
      </div>
      {/*only for mobile*/}
      <div className={s.cardPricesWrapperRelative}>
        <div className={s.cardPricesWrapperAbsolute}>
          <PriceCard
            isAuthorised={isAuthorised}
            subscriptionType="month"
            subscriptionPeriod="1 month"
            price="$15"
            note={(userStatus.userData.status === "new" || !isAuthorised) ? "ONE MONTH FREE" : ""}
            pricePerMonth="$15/month"
          />
          <PriceCard
            isAuthorised={isAuthorised}
            subscriptionType="month6"
            subscriptionPeriod="6 months"
            price="$84"
            pricePerMonth="$14/month"
          />
          <PriceCard
            isAuthorised={isAuthorised}
            subscriptionType="year"
            subscriptionPeriod="12 months"
            price="$144"
            pricePerMonth="$12/month"
          />
        </div>
      </div>
      <div className={s.benefitsWrapper}>
        {/*first*/}
        <div className={s.benefitItem}>
          <div className={s.benefitItemIconWrapper}>
            <Image className={s.benefitItemIcon} src={benefit_1} alt="icon"/>
          </div>
          <span className={s.benefitItemText}>
              Start your Qigong practice with exceptional guided videos suitable <strong
            className={s.benefitItemTextStrong}>for all ages</strong>. Start your energy practice on a solid foundation and learn at your own pace.
            </span>
        </div>
        {/*first*/}
        {/*second*/}
        <div className={s.benefitItem}>
          <div className={s.benefitItemIconWrapper}>
            <Image className={s.benefitItemIcon} src={benefit_2} alt="icon"/>
          </div>
          <span className={s.benefitItemText}>
              <strong className={s.benefitItemTextStrong}>Subscriber benefits:</strong> free &quot;Gift of Qi&quot; audio, inspiring practice blogs, webinar/workshop discounts, and 1-1 sessions with Marisa and many others.
            </span>
        </div>
        {/*second*/}
        {/*third*/}
        <div className={s.benefitItem}>
          <div className={s.benefitItemIconWrapper}>
            <Image className={s.benefitItemIcon} src={benefit_3} alt="icon"/>
          </div>
          <span className={s.benefitItemText}>
            With Video on Demand, you can transform your energy from <strong
            className={s.benefitItemTextStrong}>anywhere</strong> with an internet connection and a device.
            </span>
        </div>
        {/*third*/}
        {/*fourth*/}
        <div className={s.benefitItem}>
          <div className={s.benefitItemIconWrapper}>
            <Image className={s.benefitItemIcon} src={benefit_4} alt="icon"/>
          </div>
          <span className={s.benefitItemText}>
              Sign up today and <strong
            className={s.benefitItemTextStrong}>cancel anytime</strong> through your VOD account dashboard. If you paid with PayPal, cancel payments to Yoqi from your PayPal account as well.
          </span>
        </div>
        {/*fourth*/}
      </div>
      {!isAuthorised && <SubscribeHere/>}
    </>
  );
};

export default SubscriptionPlansPageContent;
