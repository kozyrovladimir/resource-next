import React from 'react';
import styles from './FormUnderlineText.module.scss';

type FormUnderlineTextProps = {
  children?: string;
  onClick?: () => void;
}

const FormUnderlineText: React.FC<FormUnderlineTextProps> = ({onClick, children}) => {
  return (
    <span onClick={onClick} className={styles.text}>
      {children}
    </span>
  );
};

export default FormUnderlineText;
