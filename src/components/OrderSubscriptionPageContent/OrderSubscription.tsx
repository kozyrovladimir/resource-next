import React, { useEffect } from 'react';

import { Box } from '@mui/material';

import StripePaymentForm from './components/StripePaymentForm';
import {useParams, useRouter} from "next/navigation";
import TopLayout from "@/shared/ui/TopLayout/TopLayout";
import BackButton from "@/components/BackButton/BackButton";

export type PaymentPeriodT = 'year' | 'month' | 'month6';
const OrderSubscription: React.FC = () => {
  const router = useRouter();
  // @ts-ignore
  const { plan } = useParams();

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



  return (
    <>
      <TopLayout
        title={bannerText()}
        left={<BackButton onClick={() => router.back()}>Back</BackButton>}
      />
      <Box
        sx={{
          marginTop: '32px',
          border: '2px solid #EEEEEE',
          flex: '1 1 auto',
          borderRadius: '10px',
          padding: '30px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <Box sx={{ width: '100%', maxWidth: '466px' }}>
          <StripePaymentForm period={plan as PaymentPeriodT} />
        </Box>
      </Box>
    </>
  );
};

export default OrderSubscription;
