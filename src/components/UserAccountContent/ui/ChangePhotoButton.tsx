import React from 'react';

import IconButton from '@mui/material/IconButton';

import ChangePhotoIcon from './ChangePhotoIcon';

interface ChangePhotoButtonProps extends React.ComponentProps<typeof IconButton> {}

const ChangePhotoButton: React.FC<ChangePhotoButtonProps> = ({ ...props }) => {
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
      <input hidden accept="image/*" type="file" />
      <ChangePhotoIcon />
    </IconButton>
  );
};

export default ChangePhotoButton;
