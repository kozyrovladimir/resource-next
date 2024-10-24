"use client";

import React, {useRef, useState} from 'react';
import styles from './MobileHeaderUserStatus.module.scss';
import MenuItemWithSubmenu from "../MenuItemWithSubmenu/MenuItemWithSubmenu";
import {useIsAuthorised} from "@/utils/hooks/useIsAuthorised";
import PersonIcon from '@mui/icons-material/Person';
import {useLogout} from "@/utils/hooks/useLogout";
import {LiaAngleDownSolid} from "react-icons/lia";
import {UserDialog} from "@/shared";
import LogInForm from "@/features/LogInForm/LogInForm";
import {useLoginForm} from "@/utils/hooks/useLoginForm";
import SignUpForm from "@/features/SignUpForm/SignUpForm";
import {useSignUpForm} from "@/utils/hooks/useSignUpForm";
import {FormLink, FormLinksWrapper, FormUnderlineText} from "@/entities/form-conponents";
import Link from 'next/link';
import {useRouter} from "next/navigation";
import {useGetUserData} from "@/utils/hooks/useGetUserData";
import {Search} from '@/shared';
import SearchInput from "@/features/SearchInput/SearchInput";

export const Menu: React.FC = () => {
  return (
    <LiaAngleDownSolid style={{
      fontSize: '18px',
      position: 'relative',
      bottom: '-0.1em',
      left: '-0.3em',
      fontWeight: '300'
    }}/>
  )
}

export const LinkToLogin: React.FC = () => {
  const {isLoading} = useGetUserData();
  const [open, setOpen] = React.useState(false);
  const [isLoginForm, setIsLoginForm] = React.useState(true);

  const router = useRouter();

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
      <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
        <span onClick={() => setOpen(true)} className={styles.linkMenuItem}>
          <PersonIcon sx={{fontSize: 22}}/>
         Login
      </span>
      </div>
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
      <PersonIcon sx={{fontSize: '18px'}}/>
      <span>
          {' ' + userName}
        </span>
    </Link>
  )
}

const MobileHeaderUserStatus = () => {
  const logout = useLogout();
  const userIsAuthorized = useIsAuthorised();

  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      router.push('/?search=' + searchValue + '&page=1');
    }
  };

  const handleClear = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    event.stopPropagation();
    setSearchValue('');
  };

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
      {' / '}
      &nbsp;
      <MenuItemWithSubmenu divider={false} left={true}
                           menuTitle={

        <Search style={{position: "relative", top: '4px'}}/>
      }>
        <SearchInput
          value={searchValue}
          onChange={onChange}
          onKeyDown={handleEnter}
          ref={inputRef}
          autoFocus={true}
          handleClear={handleClear}
        />
      </MenuItemWithSubmenu>
    </div>
  );
};

export default MobileHeaderUserStatus;
