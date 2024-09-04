import React from 'react';

import {Visibility, VisibilityOff} from '@mui/icons-material';
import {
  Typography,
  Stack,
  Box,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';

import {useChangeName} from '@/utils/hooks/useChangeName';

import ChangeInfoButton from '../ui/ChangeInfoButton';

import {useChangePassword} from '@/utils/hooks/useChangePassword';

import {Button} from "@/shared";
import {FormInputsStack, FormMessage} from "@/entities/form-conponents";
import {Input} from "@/shared";
import {UserDialog} from "@/shared";
import {useChangeMusicOption} from "@/utils/hooks/useChangeMusicOption";
import MusicSelector from "@/components/MusicSelector/MusicSelector";
import {useGetUserData} from "@/utils/hooks/useGetUserData";

const ProfileInfo: React.FC = () => {
  const {userData, error, isLoading} = useGetUserData();

  const nameModal = useChangeName(userData);
  const passwordModal = useChangePassword();
  const musicModal = useChangeMusicOption(userData);

  return (
    <>
      {/* change name modal */}
      <UserDialog
        title={'Change name'}
        open={nameModal.isOpen}
        onClose={nameModal.handleClose}
      >
        <div style={{position: 'relative'}}>
          <div style={{position: 'absolute', bottom: '0', width: '100%'}}>
            {nameModal.errorMessage && <FormMessage type={"error"}>
              {nameModal.errorMessage}
            </FormMessage>}
          </div>
        </div>
        <div style={{marginBottom: '0.25rem'}}></div>
        <FormInputsStack>
          <Input
            id="name"
            type={'text'}
            label={'Name'}
            autoComplete={'name'}
            value={nameModal.formik.values.name}
            onChange={nameModal.formik.handleChange}
            errorMessage={nameModal.nameErrorMessage as any}
            disabled={nameModal.pending}
          />
          <Button
            onClick={nameModal.formik.submitForm}
            disabled={nameModal.pending}
            fullWidth={true}
            variant={'primary'}
          >
            Save
          </Button>
        </FormInputsStack>
      </UserDialog>
      {/* change password modal */}
      <UserDialog
        title={'Change password'}
        open={passwordModal.isOpen}
        onClose={passwordModal.handleClose}
      >
        <div style={{position: 'relative'}}>
          <div style={{position: 'absolute', bottom: '0', width: '100%'}}>
            {passwordModal.formErrorMessage && <FormMessage type={"error"}>
              {passwordModal.formErrorMessage}
            </FormMessage>}
          </div>
        </div>
        <div style={{marginBottom: '0.25rem'}}></div>
        <FormInputsStack>
          <Input
            id="old_password"
            type={passwordModal.visibilityOldPassword ? 'text' : 'password'}
            label="Old password"
            autoComplete={'current-password'}
            errorMessage={passwordModal.oldPasswordErrorMessage as any}
            value={passwordModal.formik.values.oldPassword}
            onChange={passwordModal.formik.handleChange}
            disabled={passwordModal.pending}
            iconEnd={
              <IconButton
                sx={{mr: 0}}
                aria-label="toggle password visibility"
                onClick={passwordModal.handleClickShowOldPassword}
                edge="end"
              >
                {!passwordModal.visibilityOldPassword ? (
                  <VisibilityOff/>
                ) : (
                  <Visibility/>
                )}
              </IconButton>
            }
          />
          <Input
            id="new_password"
            type={passwordModal.visibilityNewPassword ? 'text' : 'password'}
            label="New password"
            autoComplete={'current-password'}
            errorMessage={passwordModal.newPasswordErrorMessage as any}
            value={passwordModal.formik.values.newPassword}
            onChange={passwordModal.formik.handleChange}
            disabled={passwordModal.pending}
            iconEnd={
              <IconButton
                sx={{mr: 0}}
                aria-label="toggle password visibility"
                onClick={passwordModal.handleClickShowNewPassword}
                edge="end"
              >
                {!passwordModal.visibilityNewPassword ? (
                  <VisibilityOff/>
                ) : (
                  <Visibility/>
                )}
              </IconButton>
            }
          />
          <Input
            id="confirm_password"
            type={passwordModal.visibilityNewPassword ? 'text' : 'password'}
            label="Confirm password"
            autoComplete={'current-password'}
            errorMessage={passwordModal.confirmPasswordErrorMessage as any}
            value={passwordModal.formik.values.confirmPassword}
            onChange={passwordModal.formik.handleChange}
            disabled={passwordModal.pending}
            iconEnd={
              <IconButton
                sx={{mr: 0}}
                aria-label="toggle password visibility"
                onClick={passwordModal.handleClickShowNewPassword}
                edge="end"
              >
                {!passwordModal.visibilityNewPassword ? (
                  <VisibilityOff/>
                ) : (
                  <Visibility/>
                )}
              </IconButton>
            }
          />
          <Button
            onClick={passwordModal.formik.submitForm}
            disabled={passwordModal.pending}
            fullWidth={true}
            variant={'primary'}
          >
            Change password
          </Button>
        </FormInputsStack>
      </UserDialog>
      {/* change music option */}
      <UserDialog
        title={'Change "Play by default" option'}
        text={'This option allows you to choose whether the routine part of the video will be with or without music.\n' +
          'You can always select different option on the video page (if the option is available)'}
        open={musicModal.isOpen}
        onClose={musicModal.handleClose}
      >
        <div style={{position: 'relative'}}>
          <div style={{position: 'absolute', bottom: '0', width: '100%'}}>
            {musicModal.errorMessage && <FormMessage type={"error"}>
              {musicModal.errorMessage}
            </FormMessage>}
          </div>
        </div>
        <div style={{marginBottom: '0.25rem'}}></div>
        <Stack mt={2} gap={2}>
          <MusicSelector
            disabled={musicModal.pending}
            withMusic={musicModal.withMusic}
            setWithMusic={musicModal.setWithMusic}
          />
          <Button
            onClick={musicModal.handleChangeMusicOption}
            disabled={musicModal.buttonIsDisabled}
            fullWidth={true}
            variant={'primary'}
          >
            {musicModal.pending ? 'Saving...' : 'Save'}
          </Button>
        </Stack>
      </UserDialog>
      {/* main content */}
      {isLoading && (
        <Typography mt={2} mb={2} textAlign={'center'}>
          Loading...
        </Typography>
      )}
      {error != null && (
        <Typography mt={2} mb={2} textAlign={'center'}>
          {error}
        </Typography>
      )}
      {!isLoading && error == null && (
        <>
          {/*<Stack mt={'24px'} direction={'row'} spacing={1} alignItems={'center'}>*/}
          {/*  <Avatar />*/}
          {/*  <Typography>{userData.name}</Typography>*/}
          {/*</Stack>*/}
          <Stack
            mt={2}
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            width={'300px'}
          >
            <Typography sx={{color: 'var(--color-text-grey-dark)'}}>
              Name:
            </Typography>
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
              width={'170px'}
            >
              <Typography sx={{color: 'var(--color-text-black)'}}>
                {userData.name}
              </Typography>
              <Box>
                <ChangeInfoButton onClick={nameModal.handleOpen}/>
              </Box>
            </Stack>
          </Stack>
          <Box height={16}/>
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            width={'300px'}
          >
            <Typography sx={{color: 'var(--color-text-grey-dark)'}}>
              Email:
            </Typography>
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
              width={'170px'}
            >
              <Typography sx={{color: 'var(--color-text-black)', maxWidth: '170px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
                {userData.email}
              </Typography>
            </Stack>
          </Stack>
          <Box height={16}/>
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            width={'300px'}
          >
            <Typography sx={{color: 'var(--color-text-grey-dark)'}}>
              Password:
            </Typography>
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
              width={'170px'}
            >
              <Typography sx={{color: 'var(--color-text-black)'}}>
                ********
              </Typography>
              <Box>
                <ChangeInfoButton onClick={passwordModal.handleOpen}/>
              </Box>
            </Stack>
          </Stack>
          <Box height={16}/>
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            width={'300px'}
          >
            <Typography sx={{color: 'var(--color-text-grey-dark)'}}>
              Play by default:
            </Typography>
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
              width={'170px'}
            >
              <Typography sx={{color: 'var(--color-text-black)'}}>
                {userData.with_music ? 'With music' : 'Without music'}
              </Typography>
              <Box>
                <ChangeInfoButton onClick={musicModal.handleOpen}/>
              </Box>
            </Stack>
          </Stack>
        </>
      )}
    </>
  );
};

export default ProfileInfo;
