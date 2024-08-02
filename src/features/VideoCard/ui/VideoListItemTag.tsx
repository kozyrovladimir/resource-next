import React from 'react';

import {Typography} from '@mui/material';

interface VideoListItemTagType {
  color: string;
  children: string;
  onClick: () => void;
}

const VideoListItemTag: React.FC<VideoListItemTagType> = ({
                                                            color,
                                                            children,
                                                            onClick,
                                                          }) => {
  return (
    <Typography
      onClick={onClick}
      sx={{
        fontFamily: 'Arial',
        letterSpacing: '0.25px',
        ':first-letter': {textTransform: 'uppercase'},
        ':hover': {cursor: 'pointer'},
        mr: 3,
        textDecoration: 'underline',
        color,
      }}
      gutterBottom
      component="div"
    >
      {children}
    </Typography>
  );
};

export {VideoListItemTag};
