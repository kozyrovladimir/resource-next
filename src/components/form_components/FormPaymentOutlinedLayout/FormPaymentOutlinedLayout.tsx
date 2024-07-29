import React, {PropsWithChildren} from 'react';
import styles from "./FormPaymentOutlinedLayout.module.scss";

const FormPaymentOutlinedLayout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className={styles.formPaymentLayout}>
      <div className={styles.formPaymentLayoutWrapper}>
        {children}
      </div>
    </div>
  );
};

export default FormPaymentOutlinedLayout;
