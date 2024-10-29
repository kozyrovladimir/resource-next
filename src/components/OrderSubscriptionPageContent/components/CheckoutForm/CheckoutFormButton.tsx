import React from 'react';

import Button from '@mui/material/Button';

interface CheckoutFormButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
}

const CheckoutFormButton: React.FC<CheckoutFormButtonProps> = props => {
  const { children, disabled } = props;

  return (
    <Button
      disabled={disabled}
      sx={{
        borderRadius: '100px',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.22)',
        fontWeight: '600',
        padding: '10px 0',
      }}
      fullWidth
      color={'inherit'}
      variant={'contained'}
    >
      {children}
    </Button>
  );
};

export default CheckoutFormButton;
