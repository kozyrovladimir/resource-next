import React, {PropsWithChildren} from 'react';
import styles from './FormLinksWrapper.module.scss';

const FormLinksWrapper: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className={styles.linksWrapper}>
      {children}
    </div>
  );
};

export default FormLinksWrapper;
