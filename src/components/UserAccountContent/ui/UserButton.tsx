import React from 'react';

import Button from '@mui/material/Button';

interface CheckoutFormButtonProps extends React.ComponentProps<typeof Button> {
  children?: React.ReactNode;
}

const UserButton: React.FC<CheckoutFormButtonProps> = ({ children, ...props }) => {
  return (
    <Button
      color={'primary'}
      sx={{
        color: 'black',
        boxShadow: '0px 3px 12px rgba(41, 41, 41, 0.18)',
        borderRadius: '100px',
        paddingTop: { xs: '4px', sm: '6px' },
        paddingBottom: { xs: '4px', sm: '6px' },
        paddingLeft: { xs: '8px', sm: '12px' },
        paddingRight: { xs: '8px', sm: '12px' },
        minWidth: { xs: '100px', sm: '130px' },
        fontSize: { xs: '12px', sm: '14px' },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default UserButton;
