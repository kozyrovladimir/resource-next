import React from 'react';

import { Box, Stack, Typography } from '@mui/material';

import UserAccountButton from '../ui/UserAccountButton';

import TopMenuButton from '@/components/TopMenuButton/TopMenuButton';
import { useFetchUserData } from '@/utils/hooks/useFetchUserData';
import { useLogout } from '@/utils/hooks/useLogout';
import {useRouter} from "next/navigation";

interface AccountTopBarProps {
  children: string;
}
const AccountTopBar: React.FC<AccountTopBarProps> = props => {
  const { children } = props;
  const router = useRouter();

  const logout = useLogout();
  const navigateToMainPage = () => router.push('/');

  const { userData, error, isLoading } = useFetchUserData();

  const isDisabledButtons = isLoading || Boolean(error);
  const userButtonText = userData?.name === '' ? 'Account' : userData?.name;

  const menuItems = [
    {
      name: 'Profile',
      handler: navigateToMainPage,
    },
    {
      name: 'Logout',
      handler: logout.logoutFunc,
    },
  ];

  return (
    <>
      <Stack
        mt={'32px'}
        mb={'32px'}
        sx={{ display: 'none', '@media (max-width: 920px)': { display: 'flex' } }}
        justifyContent={'space-between'}
        direction={'row'}
        width={'100%'}
      >
        <UserAccountButton
          disabled={isDisabledButtons}
          userButtonText={userButtonText}
          menuItems={menuItems}
        />
        <TopMenuButton>EXIT</TopMenuButton>
      </Stack>
      <Box
        height={{ sm: '90px', xs: '64px' }}
        sx={{
          backgroundColor: '#fafafa',
          display: 'flex',
          justifyContent: 'space-between',
          '@media (max-width: 920px)': { justifyContent: 'center' },
          alignItems: 'center',
          padding: '0 40px',
        }}
      >
        <Box
          sx={{ '@media (max-width: 920px)': { display: 'none' } }}
          width={'30%'}
        ></Box>
        <Typography
          align="center"
          fontSize={{ sm: '24px', xs: '20px' }}
          variant="h4"
        >
          {children}
        </Typography>
        <Stack
          sx={{ '@media (max-width: 920px)': { display: 'none' } }}
          justifyContent={'flex-end'}
          width={'30%'}
          spacing={'20px'}
          direction={'row'}
        >
          <UserAccountButton
            disabled={isDisabledButtons}
            userButtonText={userButtonText}
            menuItems={menuItems}
          />
          <TopMenuButton onClick={logout.logoutFunc}>EXIT</TopMenuButton>
        </Stack>
      </Box>
    </>
  );
};

export default AccountTopBar;
