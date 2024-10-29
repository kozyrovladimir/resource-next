"use client";

import React from 'react';

import {useSuccessPayment} from "@/utils/hooks/useSuccessPayment";

import {useSelector} from "react-redux";
import {AppRootStateType} from "@/store/store";
import {PurchaseInfo} from "@/models/PurchaseInfo";
import PageInfoComponent from "@/components/PageInfoComponent/PageInfoComponent";
import PageInfoLayout from "@/components/PageInfoLayout/PageInfoLayout";
import Link from "next/link";
import Loader from "@/components/Loader/Loader";

const SuccessPaymentPageContent = () => {
  const info = useSelector<AppRootStateType, PurchaseInfo>(
    state => state.successPayment,
  );

  const {isLoading, error} = useSuccessPayment(info);

  if (error) {
    return (
      <PageInfoComponent
        title={"Error"}
        text={error ? error : 'Payment information is missing or invalid. Please ensure your payment is made successfully.'}>
        <Link href={'/'}>Go to main page</Link>
      </PageInfoComponent>
    );
  }

  if (isLoading) {
    return (
      <PageInfoLayout>
        <Loader/>
      </PageInfoLayout>
    );
  }

  return (
    <PageInfoComponent title={'Success Payment'}
                       text={'Congratulations! Your subscription payment has been successfully processed. Thank you for choosing our service. Enjoy the benefits and exclusive content that come with your subscription. If you have any questions or need assistance, please don\'t hesitate to contact our support team. Happy exploring!'}>
      <Link href={'/'}>Go to main page</Link>
    </PageInfoComponent>
  );
};

export default SuccessPaymentPageContent;
