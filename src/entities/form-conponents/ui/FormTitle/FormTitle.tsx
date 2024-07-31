import React from 'react';
import styles from './FormTitle.module.scss';

interface FormTitleType {
  children?: React.ReactNode;
}

const FormTitle: React.FC<FormTitleType> = ({ children }) => {
  return (
    <h3 className={styles.formTitle}>
      {children}
    </h3>
  );
};

export default FormTitle;
