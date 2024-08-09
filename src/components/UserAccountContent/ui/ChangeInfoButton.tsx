import React from 'react';

import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import IconButton from '@mui/material/IconButton';

interface ChangeInfoButtonProps extends React.ComponentProps<typeof IconButton> {}

const ChangeInfoButton: React.FC<ChangeInfoButtonProps> = ({ ...props }) => {
  return (
    <IconButton component="button" {...props}>
      <BorderColorOutlinedIcon sx={{ color: 'black', fontSize: '16px' }} />
    </IconButton>
  );
};

export default ChangeInfoButton;
