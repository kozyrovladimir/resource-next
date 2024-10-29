"use client"

import React from 'react';
import Box from '@mui/material/Box';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import style from './VideoThumbnail.module.scss';
import {useIsAuthorised} from "@/utils/hooks/useIsAuthorised";
import {Stack} from '@mui/material';
import {useDialog} from "@/utils/hooks/useDialog";
import {useRouter} from "next/navigation";
import {Button, UserDialog} from "@/shared";
import {VideoDetailsI} from "@/shared/models";

interface VideoThumbnailProps {
  videoDetails: VideoDetailsI;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({videoDetails}) => {

  const isAuthorised = useIsAuthorised();
  const title = isAuthorised ? 'SUBSCRIBE' : 'SIGN UP';
  const text = 'Please subscribe to access this video.';

  const {isOpen, handleOpen, handleClose} = useDialog();

  const router = useRouter();

  const navigateToLogin = () => {
    router.push('/login');
  }
  const navigateToSubscription = () => {
    router.push('/subscription-plans');
  }

  return (
    <>
      {/*dialog*/}
      <UserDialog
        open={isOpen}
        onClose={handleClose}
        title={title}
        text={text}
      >
        {
          isAuthorised ? (
            <Button fullWidth={true} variant={'primary'} onClick={navigateToSubscription}>
              Subscribe
            </Button>
          ) : (
            <Stack direction={{xs: 'column', sm: 'row'}} gap={{xs: '12px', sm: '22px'}}>
              <Button fullWidth={true} variant={'primary'}
                      onClick={navigateToSubscription}>
                Subscribe
              </Button>
              <Button fullWidth={true} variant={'outlined'} onClick={navigateToLogin}>
                Login
              </Button>
            </Stack>
          )
        }
      </UserDialog>
      {/*main content*/}
      <Box
        sx={{
          aspectRatio: '16/9',
          top: '0',
          left: '0',
          width: '100%',
          backgroundImage: `url(${videoDetails.thumbnail})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundColor: 'white',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        <div className={style.wrapper}>
          <div className={style.textWrapper}>
            <PlayArrowIcon
              sx={{
                transition: 'all 150ms ease-in-out',
                backgroundColor: 'rgba(255,119,85, 0.95)',
                padding: '10px',
                borderRadius: '50%',
                fontSize: '30px',
                color: 'white',
                '&:hover': {
                  cursor: 'pointer',
                  backgroundColor: 'rgba(255,119,85, 1)',
                },
              }}
              onClick={handleOpen}
            />
          </div>
        </div>
      </Box>
    </>
  );
}

export default VideoThumbnail;