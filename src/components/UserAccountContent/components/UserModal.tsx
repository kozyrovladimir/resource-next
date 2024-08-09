import React from 'react';

import {Dialog, DialogContent, Stack, Typography, useTheme} from '@mui/material';

import LeftArrowButton from '../ui/LeftArrowButton';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  title: string;
}

const UserModal: React.FC<ModalProps> = ({open, onClose, children, title}) => {
  const theme = useTheme();

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth={'xs'}>
      <DialogContent sx={{
        [theme.breakpoints.down('xs')]: {
          padding: '16px 24px 24px 24px',
        },
        [theme.breakpoints.up('xs')]: {
          padding: '16px 24px 24px 24px',
        },
        [theme.breakpoints.up('sm')]: {
          padding: '16px 30px 30px 30px',
        },
        [theme.breakpoints.up('md')]: {
          padding: '20px 40px 50px 40px',
        },
      }}>
        <Stack direction={'row'} alignItems={'center'} spacing={'16px'}>
          <LeftArrowButton onClick={onClose}/>
          <Typography fontSize={{xs: 24, sm: 30}} sx={{color: 'var(--color-text-black)'}}
                      align={'center'}>{title}</Typography>
        </Stack>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default UserModal;
