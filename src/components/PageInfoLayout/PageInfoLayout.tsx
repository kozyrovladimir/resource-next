import React, {PropsWithChildren} from 'react';
import styles from './PageInfoLayout.module.scss';

const PageInfoLayout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className={styles.pageInfoLayout}>
      {children}
    </div>
  );
};

export default PageInfoLayout;
