import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface UserInfoBoxProps extends React.ComponentProps<typeof Box> {
  children?: React.ReactNode;
  title: string;
}

const UserInfoBox: React.FC<UserInfoBoxProps> = ({ children, title, ...props }) => {
  return (
    <Box
      sx={{
        minWidth: '400px',
        maxWidth: '420px',
        padding: '30px 40px',
        backgroundColor: '#FAFAFA',
      }}
      {...props}
    >
      <Typography fontSize={'20px'}>
        {title}
      </Typography>
      {children}
    </Box>
  );
};

export default UserInfoBox;
