import React from 'react';
import styles from './FormLink.module.scss';
import Link from "next/link";

type FormLinkProps = {
  children?: React.ReactNode;
  href: string;
}

const FormLink: React.FC<FormLinkProps> = ({children, href}) => {
  return (
    <Link href={href} className={styles.link}>
      {children}
    </Link>
  );
};

export default FormLink;
