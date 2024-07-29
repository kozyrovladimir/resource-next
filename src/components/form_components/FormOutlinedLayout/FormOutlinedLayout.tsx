import React, {PropsWithChildren} from 'react';
import styles from './FormOutlinedLayout.module.scss';

const FormOutlinedLayout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className={styles.formLayout}>
      <div className={styles.formLayoutWrapper}>
        {children}
      </div>
    </div>
  );
};

export default FormOutlinedLayout;
