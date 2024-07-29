import React from 'react';
import styles from './FormInputsStack.module.scss';

const FormInputsStack: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <div className={styles.formInputsStack}>
      {children}
    </div>
  );
};

export default FormInputsStack;
