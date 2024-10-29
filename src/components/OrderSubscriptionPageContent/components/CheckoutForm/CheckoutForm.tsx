import React, {useState} from 'react';
import Box from "@mui/material/Box";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement
} from '@stripe/react-stripe-js';
import styles from './CheckoutForm.module.scss';
import cardIcon from "../../../../assets/images/payment-networks-logos/card-icon.svg";
import {AxiosError} from "axios";
import DiscountForm from "../DiscountForm/DiscountForm";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppRootStateType} from "@/store/store";
import {PaymentType} from "@/models/PurchaseInfo";
import {CircularProgress, LinearProgress} from "@mui/material";
import {SignUpPaymentFormI} from "@/models/SignUpPaymentForm";
import {setSuccessPayment} from "@/store/reducers/success-payment.slice";
import {useRouter} from "next/navigation";
import Image from "next/image";
import {Button, Products} from '@/shared';
import {preparePurchase} from "@/shared/api/api";

interface CheckoutFormProps {
  period: keyof typeof Products,
  form?: SignUpPaymentFormI;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({period, form}) => {
  const {
    discountCode,
    payment_required,
    message: discountMessage
  } = useSelector((state: AppRootStateType) => state.discount);
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setMessage(null);

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const cardNumberElement = elements.getElement(CardNumberElement);
    const cardExpiryElement = elements.getElement(CardExpiryElement);
    const cardCvcElement = elements.getElement(CardCvcElement);

    if (!cardNumberElement || !cardExpiryElement || !cardCvcElement) {
      setMessage('An unexpected error occurred.');
      return;
    }

    setIsProcessing(true);

    // form data processing
    if (form) {
      if (!form.formik) {
        setMessage('An unexpected error occurred.');
        setIsProcessing(false);
        return;
      }

      if (!form.formik.isValid) {
        form.setPending(true);
        await form.formik.submitForm();
        form.setPending(false);
        setMessage('Please fill all fields correctly.');
        setIsProcessing(false);
        return;
      }
    }
    // end of form data processing

    // create payment method
    const createPaymentMethodResult = await stripe.createPaymentMethod({
      type: 'card',
      card: cardNumberElement,
    });

    if (createPaymentMethodResult.error) {
      setMessage(createPaymentMethodResult.error.message || 'An unexpected error occurred.');
      setIsProcessing(false);
      return;
    }
    // end of create payment method

    try {

      const paymentCreds = await preparePurchase(
        payment_required,
        Products[period],
        createPaymentMethodResult.paymentMethod.id,
        Boolean(discountCode),
        discountCode,
        Boolean(form),
        form?.formik?.values.name,
        form?.formik?.values.email,
        form?.formik?.values.password
      );

      if (paymentCreds.data.clientSecret.startsWith("seti_")) {
        const {
          error,
          setupIntent
        } = await stripe.confirmCardSetup(paymentCreds.data.clientSecret, {
          payment_method: {
            card: cardNumberElement,
          }
        });
        setMessage(error?.message || 'An unexpected error occurred.')
        if (!error) {
          setMessage('Payment succeeded!');
          dispatch(setSuccessPayment({
            product_code: Products[period],
            discount_code: discountCode,
            payment_info: {
              id: setupIntent?.id,
              type: PaymentType.setup
            }
          }))
          router.push('/success-payment');
        }
      } else if (paymentCreds.data.clientSecret.startsWith("pi_")) {
        const {
          error,
          paymentIntent
        } = await stripe.confirmCardPayment(paymentCreds.data.clientSecret, {
          payment_method: {
            card: cardNumberElement,
          }
        });
        setMessage(error?.message || 'An unexpected error occurred.')
        if (!error) {
          setMessage('Payment succeeded!');
          dispatch(setSuccessPayment({
            product_code: Products[period],
            discount_code: discountCode,
            payment_info: {
              id: paymentIntent?.id,
              type: PaymentType.payment
            }
          }))
          router.push('/success-payment');
        }
      } else {
        setMessage('An unexpected error occurred.')
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        setMessage(error.response?.data?.message || error.message);
      } else {
        setMessage('An unexpected error occurred.');
      }
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSubmitWithoutPayment = async () => {
    setIsProcessing(true);

    // form data processing
    if (form) {
      if (!form.formik) {
        setMessage('An unexpected error occurred.');
        setIsProcessing(false);
        return;
      }

      if (!form.formik.isValid) {
        form.setPending(true);
        await form.formik.submitForm();
        form.setPending(false);
        setMessage('Please fill all fields correctly.');
        setIsProcessing(false);
        return;
      }
    }
    // end of form data processing

    // check payment is required and logic for free period
    if (!payment_required) {
      try {
        await preparePurchase(
          payment_required,
          Products[period],
          '',
          Boolean(discountCode),
          discountCode,
          Boolean(form),
          form?.formik?.values.name,
          form?.formik?.values.email,
          form?.formik?.values.password
        );

        setMessage('Payment succeeded!');
        dispatch(setSuccessPayment({
          product_code: Products[period],
          discount_code: discountCode,
          payment_info: {
            id: '',
            type: PaymentType.free
          }
        }))
        router.push('/success-payment');

      } catch (error) {
        if (error instanceof AxiosError) {
          setMessage(error.response?.data?.message || error.message);
        } else {
          setMessage('An unexpected error occurred.');
        }
      } finally {
        setIsProcessing(false);
      }
      return;
    }
    // end check payment is required and logic for free period
  }

  const disabled = isProcessing;

  //prettify this form
  const [numberFieldIsFocused, setNumberFieldIsFocused] = useState<boolean>(false);
  const [dateFieldIsFocused, setDateFieldIsFocused] = useState<boolean>(false);
  const [cvcFieldIsFocused, setCvcFieldIsFocused] = useState<boolean>(false);

  const handleNumberFieldFocus = () => {
    setNumberFieldIsFocused(true);
  }

  const handleNumberFieldBlur = () => {
    setNumberFieldIsFocused(false);
  }

  const handleDateFieldFocus = () => {
    setDateFieldIsFocused(true);
  }

  const handleDateFieldBlur = () => {
    setDateFieldIsFocused(false);
  }

  const handleCvcFieldFocus = () => {
    setCvcFieldIsFocused(true);
  }

  const handleCvcFieldBlur = () => {
    setCvcFieldIsFocused(false);
  }

  const numberFieldStyles = numberFieldIsFocused ? `${styles.cardNumber} ${styles.activeField}` : styles.cardNumber;
  const dateFieldStyles = dateFieldIsFocused ? `${styles.cardDate} ${styles.activeField}` : styles.cardDate;
  const cvcFieldStyles = cvcFieldIsFocused ? `${styles.cardCVC} ${styles.activeField}` : styles.cardCVC;

  return (
    <div style={{position: 'relative'}}>
      <DiscountForm period={period}/>
      {isProcessing ? <LinearProgress style={{marginBottom: '24px'}}/> :
        <div className={styles.divider}/>}
      {
        // payment is required (form with payment)
        payment_required ? (
          <form id="payment-form" onSubmit={handleSubmit}>
            {/* Show any error or success messages */}
            {message && (
              <div className={styles.errorText}>
                {message}
              </div>
            )}
            <div className={styles.mockupFromWrapper}>
              <div className={styles.cardContainer}>
                <Image src={cardIcon} alt="card-icon"/>
                <span>Card</span>
              </div>
              <span>Card number</span>
              <CardNumberElement onFocus={handleNumberFieldFocus}
                                 onBlur={handleNumberFieldBlur}
                                 className={numberFieldStyles}/>
              <div className={styles.expirityAndCVCWrapper}>
                <div>
                  <span>Expirity</span>
                  <CardExpiryElement onFocus={handleDateFieldFocus}
                                     onBlur={handleDateFieldBlur}
                                     className={dateFieldStyles}/>
                </div>
                <div>
                  <span>CVC</span>
                  <CardCvcElement onFocus={handleCvcFieldFocus}
                                  onBlur={handleCvcFieldBlur}
                                  className={cvcFieldStyles}/>
                </div>
              </div>
              <Box pt={3}>
                <Button
                  type="submit"
                  disabled={disabled}
                  fullWidth

                >
                  {!isProcessing ? 'COMPLETE PURCHASE' :
                    <div className={styles.processingContent}>
                      <span className={styles.processingContentText}>Processing...</span>
                      <CircularProgress style={{color: 'var(--color-text-grey)'}}
                                        className={styles.processingContentIcon}
                                        size={'14px'}/>
                    </div>}
                </Button>
              </Box>
            </div>
          </form>
        ) : (
          // payment is not required (form without payment)
          <>
            {message && (
              <div className={styles.errorText}>
                {message}
              </div>
            )}
            <Button
              disabled={disabled}
              fullWidth
              onClick={handleSubmitWithoutPayment}
            >
              {!isProcessing ? 'COMPLETE PURCHASE' :
                <div className={styles.processingContent}>
                  <span className={styles.processingContentText}>Processing...</span>
                  <CircularProgress style={{color: 'var(--color-text-grey)'}}
                                    className={styles.processingContentIcon}
                                    size={'14px'}/>
                </div>}
            </Button>
          </>
        )
      }
    </div>
  );
};

export default CheckoutForm;
