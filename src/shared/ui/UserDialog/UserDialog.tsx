import React from "react";
import {Dialog, DialogContent, Typography, useTheme} from "@mui/material";
import Box from "@mui/material/Box";
import {TfiClose} from "react-icons/tfi";
import IconButton from "@mui/material/IconButton";

interface UserDialogProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  title?: string;
  text?: string;
}

const UserDialog: React.FC<UserDialogProps> = ({
                                                 open,
                                                 onClose,
                                                 children,
                                                 title,
                                                 text
                                               }) => {
  const theme = useTheme();

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth={'sm'}>
      <DialogContent sx={{
        [theme.breakpoints.down('xs')]: {
          padding: '16px',
        },
        [theme.breakpoints.up('xs')]: {
          padding: '24px',
        },
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
        >
          <div style={{width: '24px'}}></div>
          <Typography fontSize={{xs: 24, sm: 30}}
                      sx={{color: 'var(--color-text-black)'}}
                      fontWeight={700} align={'center'}>{title}</Typography>
          <div>
            <IconButton onClick={onClose} sx={{borderRadius: '20px'}}>
              <TfiClose color={'var(--color-text-black)'}/>
            </IconButton>
          </div>
        </Box>
        <Box mb={2}> {/*dont remove mb*/}
          {text && <Typography fontSize={{xs: 14, sm: 16}}
                               sx={{
                                 color: 'var(--color-text-grey-dark)',
                                 paddingBottom: '5px',
                                 paddingTop: '5px'
                               }}
                               align={'center'}>{text}</Typography>}
        </Box>
        <Box sx={{margin: '0 auto'}}>
          {children}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export {UserDialog};
