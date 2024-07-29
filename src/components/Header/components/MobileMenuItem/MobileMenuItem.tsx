import React, {PropsWithChildren} from 'react';
import styles from "./MobileMenuItem.module.scss";

const MobileMenuItem: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className={styles.mobileMenuItem}>
      {children}
    </div>
  );
};

export default MobileMenuItem;
