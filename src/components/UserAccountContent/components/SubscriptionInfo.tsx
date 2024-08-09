import React from 'react';

import { Box, Stack, Typography } from '@mui/material';

import {
  useFetchSubscriptionStatus
} from "@/utils/hooks/useFetchSubscriptionStatus";
import {
  normaliseSubscriptionDate
} from "@/utils/helpers/normaliseSubscriptionDate";
import {
  defineSubscriptionStatusColor
} from "@/utils/helpers/defineSubscriptionStatusColor";
import DefineSubscriptionButton from "./DefineSubscriptionButton";
import {SubscriptionStatus as Int} from "../../../models/SubscriptionStatus";

const DefineSubscriptionStatusContent: React.FC<{subscriptionStatus: Int}> = ({subscriptionStatus}) => {
  const subscriptionStatusTextColor = defineSubscriptionStatusColor(subscriptionStatus?.status);

  switch (subscriptionStatus.status) {
    case 'cancelled':
      return (
        <>
          <Stack spacing={2} direction="column">
            <Typography sx={{ color: 'var(--color-text-grey-dark)' }}>
              Subscription status:
            </Typography>
          </Stack>
          <Stack spacing={2} direction="column">
            <Typography sx={{ color: subscriptionStatusTextColor }}>
              Cancelled
            </Typography>
          </Stack>
        </>
      )
    case 'new':
      return (
        <>
          <Stack spacing={2} direction="column">
            <Typography sx={{ color: 'var(--color-text-grey-dark)' }}>
              Subscription status:
            </Typography>
          </Stack>
          <Stack spacing={2} direction="column">
            <Typography sx={{ color: subscriptionStatusTextColor }}>
              No subscription
            </Typography>
          </Stack>
        </>
      )
    case 'active':
      return (
        <>
          <Stack spacing={2} direction="column">
            <Typography sx={{ color: 'var(--color-text-grey-dark)' }}>
              Next payment date:
            </Typography>
            <Typography sx={{ color: 'var(--color-text-grey-dark)' }}>
              Subscription status:
            </Typography>
          </Stack>
          <Stack spacing={2} direction="column">
            <Typography sx={{ color: 'var(--color-text-black)' }}>
              {subscriptionStatus?.next_payment ? normaliseSubscriptionDate(subscriptionStatus?.next_payment) : ' - '}
            </Typography>
            <Typography sx={{ color: subscriptionStatusTextColor }}>
              Active
            </Typography>
          </Stack>
        </>
      )
    case 'scheduled_to_cancel':
      return (
        <>
          <Stack spacing={2} direction="column">
            <Typography sx={{ color: 'var(--color-text-grey-dark)' }}>
              End date:
            </Typography>
            <Typography sx={{ color: 'var(--color-text-grey-dark)' }}>
              Subscription status:
            </Typography>
          </Stack>
          <Stack spacing={2} direction="column">
            <Typography sx={{ color: 'var(--color-text-black)' }}>
              {subscriptionStatus?.date_end ? normaliseSubscriptionDate(subscriptionStatus?.date_end) : ' - '}
            </Typography>
            <Typography sx={{ color: subscriptionStatusTextColor }}>
              Scheduled to cancel
            </Typography>
          </Stack>
        </>
      )
    case 'suspended':
      return (
        <>
          <Stack spacing={2} direction="column">
            <Typography sx={{ color: 'var(--color-text-grey-dark)' }}>
              Next payment date:
            </Typography>
            <Typography sx={{ color: 'var(--color-text-grey-dark)' }}>
              Subscription status:
            </Typography>
          </Stack>
          <Stack spacing={2} direction="column">
            <Typography sx={{ color: 'var(--color-text-black)' }}>
              {subscriptionStatus?.next_payment ? normaliseSubscriptionDate(subscriptionStatus?.next_payment) : ' - '}
            </Typography>
            <Typography sx={{ color: subscriptionStatusTextColor }}>
              Suspended
            </Typography>
          </Stack>
        </>
      )
    default:
      return (
        <></>
      )
  }
}

const SubscriptionInfo: React.FC = () => {

  const { subscriptionStatus, isLoading, error } = useFetchSubscriptionStatus();

  const subscriptionGateway = subscriptionStatus?.gateway;

  if (isLoading)
    return (
      <Typography mt={2} mb={2} textAlign={'center'}>
        Loading...
      </Typography>
    );

  if (error != null)
    return (
      <Typography mt={2} mb={2} textAlign={'center'}>
        {error}
      </Typography>
    );

  return (
    <>
      <Stack mt={2} direction="row" spacing={3}>
        <DefineSubscriptionStatusContent
          subscriptionStatus={subscriptionStatus}
        />
      </Stack>
      <Box height={'20px'} />
      <DefineSubscriptionButton
        subscriptionStatus={subscriptionStatus?.status}
        gateway={subscriptionGateway}
      />
    </>
  );
};

export default SubscriptionInfo;
