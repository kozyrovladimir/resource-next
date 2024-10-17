"use client";

import React from 'react';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import styles from "./Favourites.module.scss";
import {useIsAuthorised} from "@/utils/hooks/useIsAuthorised";
import Link from "next/link";

const Favourites = () => {
  const isAuth = useIsAuthorised();

  if (!isAuth) {
    return null;
  }

  return (
    <div>
      <span className={styles.slash}>/</span>
      <Link href={'/video/favourites'} style={{bottom: '-0.25rem', position: 'relative'}}>
        <FavoriteBorderIcon className={styles.icon}  fontSize={"small"}/>
      </Link>
    </div>
  );
};

export default Favourites;
