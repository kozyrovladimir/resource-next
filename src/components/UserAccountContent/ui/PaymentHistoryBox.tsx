import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface TableBoxProps extends React.ComponentProps<typeof Box> {
  children?: React.ReactNode;
  isPaymentHistory?: boolean;
}

const PaymentHistoryBox: React.FC<TableBoxProps> = ({ children, isPaymentHistory }) => {
  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <Typography fontSize={24}>
        {isPaymentHistory ? 'Payment history' : 'Purchase history'}
      </Typography>
      {children}
    </Box>
  );
};

export default PaymentHistoryBox;
