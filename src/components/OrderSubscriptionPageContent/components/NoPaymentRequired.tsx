import React from 'react';
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';
import Link from "next/link";

interface NoPaymentRequiredProps {
  message: string;
}

const NoPaymentRequired: React.FC<NoPaymentRequiredProps> = ({message}) => {

  return (
    <Stack direction={"column"} mt={4} gap={2} alignItems={'center'} justifyContent={'center'}>
      <Typography color={'var(--color-notofication-green)'}>{message}</Typography>
      <Typography color={'var(--color-text-grey-dark)'}>
        <Link href={'/'}>Return to home page</Link>
      </Typography>
    </Stack>
  );
};

export default NoPaymentRequired;
