import React from 'react';
import styles from './AccountSwitchHistory.module.scss';
import {Button} from "@/shared";

interface AccountSwitchHistoryProps {
  isPayment: boolean;
  setIsPayment: (isPayment: boolean) => void;
}

const AccountSwitchHistory: React.FC<AccountSwitchHistoryProps> = ({
                                                                     isPayment,
                                                                     setIsPayment
                                                                   }) => {

  const paymentButtonStyles = isPayment ? `${styles.button} ${styles.button_active}` : styles.button;
  const purchasesButtonStyles = !isPayment ? `${styles.button} ${styles.button_active}` : styles.button;

  return (
    <div className={styles.switchHistory}>
      <Button
        className={paymentButtonStyles}
        onClick={() => setIsPayment(true)}
      >
        Payments
      </Button>
      <Button
        className={purchasesButtonStyles}
        onClick={() => setIsPayment(false)}
      >
        Purchases
      </Button>
    </div>
  );
};

export default AccountSwitchHistory;
