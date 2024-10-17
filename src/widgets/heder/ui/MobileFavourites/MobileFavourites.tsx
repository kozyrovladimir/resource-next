"use client";

import React from 'react';
import {useIsAuthorised} from "@/utils/hooks/useIsAuthorised";
import styles from './MobileFavourites.module.scss';
import MobileMenuItem from "../MobileMenuItem/MobileMenuItem";
import Link from "next/link";

const MobileFavourites = () => {
  const isAuth = useIsAuthorised();

  if (!isAuth) {
    return null;
  }

  return (
    <MobileMenuItem>
      <Link href={'/video/favourites'} style={{bottom: '-0.25rem', position: 'relative', textDecoration: 'none'}}>
        <span className={styles.favouritesText}>FAVOURITES</span>
      </Link>
    </MobileMenuItem>
  );
};

export default MobileFavourites;
