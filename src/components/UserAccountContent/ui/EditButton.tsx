import React from 'react';

import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import IconButton from '@mui/material/IconButton';

interface EditButtonProps extends React.ComponentProps<typeof IconButton> {}

const EditButton: React.FC<EditButtonProps> = ({ ...props }) => {
  const styles = {
    backgroundColor: '#FFFFFF',
    color: '#FAFAF',
    '&:hover': {
      backgroundColor: '#AEAEAE',
      color: '#000000',
    },
    '&:active': {
      backgroundColor: '#AEAEAE',
      color: '#000000',
    },
    '&:disabled': {
      backgroundColor: '#FAFAFA',
      color: '#7D7D7D',
      border: '1px solid #AEAEAE',
    },
  };

  return (
    <IconButton sx={styles} color="primary" aria-label="upload picture" component="label">
      <BorderColorOutlinedIcon sx={{ color: 'black', fontSize: '16px' }} />
    </IconButton>
  );
};

export default EditButton;
