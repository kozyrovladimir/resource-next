"use client";

import { useEffect, useState } from 'react';
import styles from './CookieConsent.module.scss';
import { Typography } from '@mui/material';
import Cookies from 'js-cookie';
import Link from "next/link";
import { Button } from "@/shared";
import { usePathname } from 'next/navigation';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/privacy-policy') {
      setIsVisible(false);
    } else {
      const consent = Cookies.get('cookie_consent');
      if (!consent) {
        setIsVisible(true);
      }
    }
  }, [pathname]);

  const handleConsent = (value: 'granted' | 'denied') => {
    Cookies.set('cookie_consent', value, { expires: 365 });
    setIsVisible(false);
    window.location.reload();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.cookieBarWrapper}>
      <Typography variant="body1">
        We use cookies to ensure you get the best experience on our website. By
        clicking the button, you consent to the use of cookies.{"\u0020"}
        <Link href={'/privacy-policy'} className={styles.cookieBarLink}> Learn more</Link>
      </Typography>
      <div className={styles.cookieBarButtons}>
        <Button fullWidth={true} variant={'primary'} onClick={() => handleConsent('granted')}>
          Accept
        </Button>
        <Button fullWidth={true} variant={'outlined'} onClick={() => handleConsent('denied')}>
          Decline
        </Button>
      </div>
    </div>
  );
};

export {CookieConsent};
