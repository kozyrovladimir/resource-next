import React from 'react';

import Button, { ButtonProps } from '@mui/material/Button';

interface TopMenuButtonType extends ButtonProps {
  children?: React.ReactNode;
}

const TopMenuButton: React.FC<TopMenuButtonType> = ({ children, ...props }) => {
  return (
    <Button
      size="large"
      variant="text"
      sx={{
        flexShrink: 0,
        letterSpacing: '0.1rem',
        fontSize: '16px',
        padding: '18px 24px 18px 24px',
        height: '44px',
        borderRadius: '100px',
        boxShadow: '0 4px 16px rgb(0 0 0 / 4%)',
        '&:hover': {
          backgroundColor: '#eeeeee',
        },
        backgroundColor: 'white',
        color: 'black',
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default TopMenuButton;
