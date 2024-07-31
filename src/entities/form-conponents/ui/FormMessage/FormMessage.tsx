import React from 'react';

import styles from './FormMessage.module.scss';

type FormMessageProps = {
  type: 'error' | 'success';
  children: React.ReactNode;
}

const FormMessage: React.FC<FormMessageProps> = ({children, type}) => {
  const classNames = type === 'error' ? styles.errorMessage : styles.successMessage;

  return (
    <div className={styles.errorMessageContainer}>
      <span className={classNames}>
      {children}
      </span>
    </div>
  );
};

export default FormMessage;
