'use client'

import React from 'react';

import {Box, Stack} from '@mui/material';

import HistoryTable from './components/HistoryTable';
import ProfileInfo from './components/ProfileInfo';
import SubscriptionInfo from './components/SubscriptionInfo';

import AccordionInfo from './ui/AccordionInfo';
import PaymentHistoryBox from './ui/PaymentHistoryBox';
import UserInfoBox from './ui/UserInfoBox';

import styles from './UserAccountContent.module.scss';
import AccountSwitchHistory from "@/components/AccountSwitchHistory/AccountSwitchHistory";
import BackButton from "@/components/BackButton/BackButton";
import {useRouter} from "next/navigation";
import TopLayout from "@/shared/ui/TopLayout/TopLayout";

const UserAccount: React.FC = () => {
  const router = useRouter();

  const [isPayment, setIsPayment] = React.useState<boolean>(true);

  return (
    <>
      <TopLayout
        title="PERSONAL ACCOUNT"
        left={<BackButton onClick={() => router.back()}>Back</BackButton>}
      />
      <Box sx={{flex: '1 1 auto'}}>
        <Stack
          display={{xs: 'none', md: 'flex'}}
          mt={'60px'}
          direction={'row'}
          spacing={'40px'}
        >
          <Stack direction={'column'} spacing={'30px'}>
            <UserInfoBox title={'Profile'}>
              <ProfileInfo/>
            </UserInfoBox>
            <UserInfoBox title={'Subscription'}>
              <SubscriptionInfo/>
            </UserInfoBox>
          </Stack>
          <Stack direction={'column'} gap={4} width={'100%'}>
            <AccountSwitchHistory
              isPayment={isPayment}
              setIsPayment={setIsPayment}
            />
            <PaymentHistoryBox isPaymentHistory={isPayment}>
              <HistoryTable
                isPayment={isPayment}
              />
            </PaymentHistoryBox>
          </Stack>
        </Stack>
        <Box display={{xs: 'box', md: 'none'}} width={'100%'}>
          <div className={styles.infoGridContainer}>
            <div className={styles.profileInfo}>
              <AccordionInfo title={'Profile'}>
                <ProfileInfo/>
              </AccordionInfo>
            </div>
            <div className={styles.subscriptionInfo}>
              <AccordionInfo title={'Subscription'}>
                <SubscriptionInfo/>
              </AccordionInfo>
            </div>
            <div className={styles.paymentsInfo}>
              <AccountSwitchHistory
                isPayment={isPayment}
                setIsPayment={setIsPayment}
              />
              <AccordionInfo title={isPayment ? 'Payment history' : 'Purchases history'}>
                <HistoryTable
                  isPayment={isPayment}
                />
              </AccordionInfo>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default UserAccount;
