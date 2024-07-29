"use client";

import React from 'react';
import styles from './UserStatus.module.scss';
import MenuItemWithSubmenu from "../MenuItemWithSubmenu/MenuItemWithSubmenu";
import {useFetchUserData} from "@/utils/hooks/useFetchUserData";
import {useIsAuthorised} from "@/utils/hooks/useIsAuthorised";
import PersonIcon from '@mui/icons-material/Person';
import MobileMenuItem from "../MobileMenuItem/MobileMenuItem";
import MobileMenuItemWithSubmenu
  from "../MobileMenuItemWithSubmenu/MobileMenuItemWithSubmenu";
import {useLogout} from "@/utils/hooks/useLogout";
import {LiaAngleDownSolid} from "react-icons/lia";
import UserDialog from "../../../UserDialog/UserDialog";
import LogInForm from "../../../LogInForm/LogInForm";
import {useLoginForm} from "@/utils/hooks/useLoginForm";
import SignUpForm from "../../../SignUpForm/SignUpForm";
import {useSignUpForm} from "@/utils/hooks/useSignUpForm";
import {FormLink, FormLinksWrapper, FormUnderlineText} from "../../../form_components";
import {reloadPage} from "@/utils/helpers/reloadPage";
import Link from 'next/link';
import {usePathname, useRouter} from "next/navigation";
import {useGetUserData} from "@/utils/hooks/useGetUserData";

export const Menu: React.FC = () => {
  return (
    <>
      {'MENU  '}
      <LiaAngleDownSolid style={{
        fontSize: '18px',
        position: 'relative',
        bottom: '-0.1em',
        right: '-0.3em',
        fontWeight: '300'
      }}/>
    </>
  )
}

export const LinkToLogin: React.FC = () => {
  const { isLoading} = useGetUserData();
  const [open, setOpen] = React.useState(false);
  const [isLoginForm, setIsLoginForm] = React.useState(true);

  const router = useRouter();
  const url = usePathname();

  const loginForm = useLoginForm(() => router.refresh());
  const signUpForm = useSignUpForm(() => router.refresh());

  const onClose = () => {
    setOpen(false);
    loginForm.resetForm();
    signUpForm.resetForm();
  }

  if (isLoading) {
    return (
      <span className={styles.loadingText}>loading...</span>
    )
  }

  return (
    <>
      {/*dialog*/}
      <UserDialog
        open={open}
        onClose={onClose}
        title={isLoginForm ? 'Log in' : 'Sign up'}
      >
        {isLoginForm ? (
          <LogInForm withTitle={false} form={loginForm}>
            <FormLinksWrapper>
              <div onClick={onClose}>
                <FormLink href={'/forgot-password'}>
                  I forgot my password
                </FormLink>
              </div>
              <FormUnderlineText onClick={() => setIsLoginForm(false)}>
                Sign up
              </FormUnderlineText>
            </FormLinksWrapper>
          </LogInForm>
        ) : (
          <SignUpForm withTitle={false} form={signUpForm}>
            <FormLinksWrapper>
              <FormUnderlineText onClick={() => setIsLoginForm(true)}>
                Log in
              </FormUnderlineText>
            </FormLinksWrapper>
          </SignUpForm>
        )}
      </UserDialog>
      {/*end dialog*/}
      <span onClick={() => setOpen(true)} className={styles.linkMenuItem}>
        LOGIN
      </span>
    </>
  )
}

export const LinkToUserAccount: React.FC = () => {
  const {userData, error, isLoading} = useGetUserData();

  const userName = userData.name;

  if (isLoading) {
    return (
      <span className={styles.loadingText}>loading...</span>
    )
  }

  if (error) {
    return (
      <span className={styles.errorText}>{error ? error : 'error'}</span>
    )
  }

  return (
    <Link href={'/user-account'} className={styles.linkMenuItem}>
      {/*<PersonIcon sx={{fontSize: '18px', position: 'relative', top: '-0.1em'}}/>*/}
      <PersonIcon sx={{fontSize: '18px'}}/>
      <span>
          {' ' + userName}
        </span>
    </Link>
  )
}

const MobileUserStatusContent: React.FC = () => {
  const userIsAuthorized = useIsAuthorised();

  if (userIsAuthorized) {
    return <LinkToUserAccount/>
  } else {
    return <LinkToLogin/>
  }
}

export const MobileUserStatus = () => {
  const logout = useLogout();
  const userIsAuthorized = useIsAuthorised();

  return (
    <>
      <MobileMenuItem>
        <MobileUserStatusContent/>
      </MobileMenuItem>
      <MobileMenuItemWithSubmenu menuTitle={'MENU'}>
        {userIsAuthorized &&
            <Link className={styles.linkSubMenuItem} href={'/user-account'}>MY
                ACCOUNT</Link>}
        <a className={styles.linkSubMenuItem} href='https://videos.yoqi.com'>VIDEO ON
          DEMAND</a>
        <a className={styles.linkSubMenuItem} href='https://university.yoqi.com'>YOQI
          TRAINING PROGRAM</a>
        {userIsAuthorized ? (<span className={styles.linkSubMenuItem}
                                   onClick={logout.logoutFunc}>{logout.isLoggingOut ? 'Loading...' : 'Logout'}</span>) :
          (<Link className={styles.linkSubMenuItem} href={'/sign-up'}>Sign up</Link>)
        }
      </MobileMenuItemWithSubmenu>
    </>
  )
}

const UserStatus = () => {
  const logout = useLogout();
  const userIsAuthorized = useIsAuthorised();

  return (
    <div className={styles.userStatusWrapper}>
      {userIsAuthorized ? <LinkToUserAccount/> : <LinkToLogin/>}
      &nbsp;
      {' / '}
      &nbsp;
      <MenuItemWithSubmenu divider={false} left={true}
                           menuTitle={<Menu/>}>
        {userIsAuthorized &&
            <Link className={styles.linkSubMenuItem} href={'/user-account'}>MY
                ACCOUNT</Link>}
        <a className={styles.linkSubMenuItem} href='https://videos.yoqi.com'>VIDEO ON
          DEMAND</a>
        <a className={styles.linkSubMenuItem} href='https://university.yoqi.com'>YOQI
          TRAINING PROGRAM</a>
        {userIsAuthorized ? (<span className={styles.linkSubMenuItem}
                                   onClick={logout.logoutFunc}>{logout.isLoggingOut ? 'Loading...' : 'Logout'}</span>) :
          (
            <Link className={styles.linkSubMenuItem} href={'/sign-up'}>Sign up</Link>
          )
        }
      </MenuItemWithSubmenu>
    </div>
  );
};

export default UserStatus;
