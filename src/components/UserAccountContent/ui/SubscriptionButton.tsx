import React from 'react';

import Button from '@mui/material/Button';

interface CheckoutFormButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode;
  variantS?: 'primary' | 'secondary';
}

const SubscriptionButton: React.FC<CheckoutFormButtonProps> = ({
  children,
  variantS = 'primary',
  ...props
}) => {
  const primaryStyles = {
    borderRadius: '100px',
    textTransform: 'none',
    fontSize: '16px',
    boxShadow: '0px 3px 12px rgba(41, 41, 41, 0.18)',
    padding: '6px 48px',
    width: '100%',
    maxWidth: '400px',
    backgroundColor: '#FFD700',
    color: '#000000',
    '&:hover': {
      backgroundColor: '#FAFAFA',
      color: '#000000',
    },
    '&:active': {
      backgroundColor: '#FAFAFA',
      color: '#000000',
    },
    '&:disabled': {
      backgroundColor: '#FAFAFA',
      color: '#7D7D7D',
    },
  };

  const secondaryStyles = {
    borderRadius: '100px',
    textTransform: 'none',
    fontSize: '16px',
    padding: '6px 48px',
    width: '100%',
    maxWidth: '400px',
    backgroundColor: '#FFFFFF',
    color: '#000000',
    border: '1px solid #AEAEAE',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: '#FAFAFA',
      color: '#000000',
      border: '1px solid #FFF',
    },
    '&:active': {
      backgroundColor: '#FAFAFA',
      color: '#000000',
      border: '1px solid #FFF',
    },
    '&:disabled': {
      backgroundColor: '#FAFAFA',
      color: '#7D7D7D',
      border: '1px solid #AEAEAE',
    },
  };

  const styles = variantS === 'primary' ? primaryStyles : secondaryStyles;

  return (
    <Button sx={styles} fullWidth variant={'contained'} {...props}>
      {children}
    </Button>
  );
};

export default SubscriptionButton;
