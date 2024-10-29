import React from 'react';
import styles from "./SubscribeHere.module.scss";
import instagram from "@/assets/images/subscription-plans/instagram.svg";
import facebook from "@/assets/images/subscription-plans/facebook.svg";
import pinterest from "@/assets/images/subscription-plans/pinterest.svg";
import {useSubscribeHereForm} from "@/utils/hooks/useSubscribeHere";
import Image from "next/image";
import {Button, Input} from "@/shared";

const SubscribeHere = () => {
  const {
    nameErrorMessage,
    emailErrorMessage,
    errorMessage,
    pending,
    successMessage,
    formik
  } = useSubscribeHereForm();

  return (
    <div className={styles.subscribeContainer}>
      <div className={styles.subscribe}>
        <h4 className={styles.subscribeTitle}>SUBSCRIBE HERE</h4>
        <span className={styles.subscribeText}>Not sure about your purchase? Subscribe to our newsletter and receive FREE trainings, workshops, promos, and more!</span>
        <div className={styles.subscribeLinks}>
          <div>
            <a href={'https://www.instagram.com/yoqi.yogaqigong'}>
              <Image src={instagram} alt="instagram icon"/>
            </a>
          </div>
          <div>
            <a href={'https://www.facebook.com/yoqi.yogaqigong'}>
              <Image src={facebook} alt="facebook icon"/>
            </a>
          </div>
          <div>
            <a href={'https://www.pinterest.com/yoqiyogaqigong/'}>
              <Image src={pinterest} alt="pinterest icon"/>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.form}>
        {errorMessage && <span className={styles.formErrorMessage}>{errorMessage}</span>}
        {successMessage && <span className={styles.formSuccessMessage}>{successMessage}</span>}
        <div className={styles.formInputsContainer}>
          <Input
            label={'Name'}
            placeholder={'Enter your Name'}
            type={'text'}
            id="name"
            disabled={pending}
            value={formik.values.name}
            onChange={formik.handleChange}
            errorMessage={nameErrorMessage as any}
          />
          <Input
            id="email"
            type="email"
            label="Enter Email"
            autoComplete={'email'}
            errorMessage={emailErrorMessage as any}
            value={formik.values.email}
            onChange={formik.handleChange}
            disabled={pending}
          />
        </div>
        <Button onClick={formik.submitForm} disabled={pending}
                fullWidth={true}>Subscribe</Button>
      </div>
    </div>
  );
};

export default SubscribeHere;
