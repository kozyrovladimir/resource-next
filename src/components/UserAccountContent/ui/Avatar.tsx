import React from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import ChangePhotoButton from './ChangePhotoButton';

interface AvatarProps {
  src?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <AccountCircleIcon
        sx={{
          width: '80px',
          height: '80px',
          color: '#AEAEAE',
        }}
      />
      <div style={{ position: 'absolute', bottom: '5px', right: '5px' }}>
        <ChangePhotoButton />
      </div>
    </div>
  );
};

export default Avatar;
