import React, {PropsWithChildren} from 'react';
import styles from "./PaymentPageGridContainer.module.scss";
import {useIsAuthorised} from "@/utils/hooks/useIsAuthorised";
const PaymentPageGridContainer: React.FC<PropsWithChildren> = ({children}) => {
  const isAuthorised = useIsAuthorised();

  if (isAuthorised) {
    return (
        <div className={styles.withoutAuthContainer}>
          {children}
        </div>
    )
  }

  return (
    <div className={styles.withAuthContainer}>
      {children}
    </div>
  );
};

export default PaymentPageGridContainer;
