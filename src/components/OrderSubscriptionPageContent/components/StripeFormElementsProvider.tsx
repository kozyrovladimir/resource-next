import React, {PropsWithChildren, useEffect} from 'react';
import {loadStripe} from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';
import { ErrorBoundary } from 'react-error-boundary';
import {useSelector} from "react-redux";
import {AppRootStateType} from "@/store/store";
import Stack from "@mui/material/Stack";
import PageInfoComponent from "@/components/PageInfoComponent/PageInfoComponent";

//does not same like the same component in university
const StripeFormElementsProvider: React.FC<PropsWithChildren> = ({children}) => {
  const discountCode = useSelector((state: AppRootStateType) => state.discount.discountCode);
  const stripePK = process.env.NEXT_PUBLIC_STRIPE_PK as string;

  useEffect(() => {
  }, [discountCode]);

  if (stripePK === undefined) {
    return (
      <Stack alignItems={'center'}>
        <h3 style={{color: 'red'}}>Error</h3>
        <p style={{color: 'red'}}>{'Stripe public key is not defined!'}</p>
      </Stack>
    );
  }

  return (
    <ErrorBoundary fallback={<PageInfoComponent
      title="Error"
      text={'Something went wrong...'}
    />}>
      <Elements stripe={loadStripe(stripePK)}>
        {children}
      </Elements>
    </ErrorBoundary>
  );
};

export default StripeFormElementsProvider;
