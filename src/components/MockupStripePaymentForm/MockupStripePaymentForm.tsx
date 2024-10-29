import React from 'react';
import styles from './MockupStripePaymentForm.module.scss';
import visaLogo from '@/assets/images/payment-networks-logos/visa-logo.svg';
import mastercardLogo
  from '@/assets/images/payment-networks-logos/mastercard-logo.svg';
import americanExpressLogo
  from '@/assets/images/payment-networks-logos/american-express-logo.svg';
import discoverLogo from '@/assets/images/payment-networks-logos/discover-logo.svg';
import cardIcon from '@/assets/images/payment-networks-logos/card-icon.svg';
import MockDiscountForm
  from "@/components/OrderSubscriptionPageContent/components/DiscountForm/MockDiscountForm";
import Image from "next/image";
import {Button, Input} from "@/shared";

const MockupStripePaymentForm: React.FC = () => {
  return (
    <>
      <MockDiscountForm/>
      <div className={styles.mockupFromWrapper}>
        <div className={styles.cardContainer}>
          <Image src={cardIcon} alt="card-icon"/>
          <span>Card</span>
        </div>
        <span>Card number</span>
        <Input
          disabled={true}
          value={'1234 1234 1234 1234'}
          iconEnd={
            <div className={styles.paymentCardsLogoWrapper}>
              <Image src={visaLogo} alt="visa-logo"/>
              <Image src={mastercardLogo} alt="nastercard-logo"/>
              <Image src={americanExpressLogo} alt="american-express-logo"/>
              <Image src={discoverLogo} alt="discover-logo-logo"/>
            </div>
          }
        />
        <div className={styles.expirityAndCVCWrapper}>
          <div>
            <span>Expirity</span>
            <Input
              disabled={true}
              value={'MM / YY'}
            />
          </div>
          <div>
            <span>CVC</span>
            <Input
              disabled={true}
              value={'CVC'}
            />
          </div>
        </div>
        <span>Name on card</span>
        <Input
          disabled={true}
          value={'Surname First name'}
        />
        <Button className={styles.mockupFormButton} fullWidth={true} disabled={true}>
          PAY NOW
        </Button>
      </div>
    </>
  );
};

export default MockupStripePaymentForm;
