import React from 'react';
import styles from './FormSubtitle.module.scss';

interface FormSubtitleType {
  children?: React.ReactNode;
}

const FormSubtitle: React.FC<FormSubtitleType> = ({ children }) => {
  return (
    <span className={styles.formSubtitle}>
      {children}
    </span>
  );
};

export default FormSubtitle;
