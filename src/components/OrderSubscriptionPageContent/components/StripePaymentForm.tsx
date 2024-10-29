import React from 'react';

import CheckoutForm from './CheckoutForm/CheckoutForm';

import Stack from "@mui/material/Stack";
import {
  useFetchSubscriptionStatus
} from "@/utils/hooks/useFetchSubscriptionStatus";
import Typography from "@mui/material/Typography";
import StripeFormElementsProvider from "./StripeFormElementsProvider";
import MockupStripePaymentForm
  from "@/components/MockupStripePaymentForm/MockupStripePaymentForm";
import Loader from "@/components/Loader/Loader";
import {Products} from "@/shared";

interface StripePaymentFormProps {
  period: keyof typeof Products;
}

const StripePaymentForm: React.FC<StripePaymentFormProps> = props => {
  const {
    isLoading: isSubscriptionStatusIsLoading,
    error: subscriptionStatusError,
    subscriptionStatus
  } = useFetchSubscriptionStatus();

  if (isSubscriptionStatusIsLoading) {
    return (
      <Stack maxHeight={'40vh'} justifyContent={'center'} alignItems={'center'} padding={'40px'}>
        <Loader/>
      </Stack >
    );
  }

  if (subscriptionStatusError) {
    return (
      <Stack alignItems={'center'}>
        <h3 style={{color: 'red'}}>Error</h3>
        <p style={{color: 'red'}}>{subscriptionStatusError}</p>
      </Stack>
    );
  }

  // if subscriptionStatus is undefined then we don't show anything
  if(!subscriptionStatus?.status) {
    return null
  }

  // if user already has an active subscription then we show the mockup payment form
  if (subscriptionStatus?.status === 'active' || subscriptionStatus?.status === 'suspended' || subscriptionStatus?.status === 'scheduled_to_cancel') {
    return (
      <>
        <Typography align={'center'} sx={{ mb: 2 }} color={'green'}>
          You already have an active subscription.
        </Typography>
        <MockupStripePaymentForm/>
      </>
    );
  }

  return (
      <StripeFormElementsProvider>
        <CheckoutForm
          period={props.period}
        />
      </StripeFormElementsProvider>
  );
};

export default React.memo(StripePaymentForm);
