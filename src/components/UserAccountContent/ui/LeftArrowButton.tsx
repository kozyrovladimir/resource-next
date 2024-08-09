import React from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';

interface LeftArrowButtonProps extends React.ComponentProps<typeof IconButton> {}

const LeftArrowButton: React.FC<LeftArrowButtonProps> = ({ ...props }) => {
  return (
    <IconButton component="button" {...props}>
      <ArrowBackIcon sx={{ color: 'black', fontSize: '30px' }} />
    </IconButton>
  );
};

export default LeftArrowButton;
