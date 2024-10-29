import React, { useState, useEffect } from 'react';
import Box from "@mui/material/Box";
import { useAddDiscount } from "@/utils/hooks/useAddDiscount";
import { useSelector } from "react-redux";
import { AppRootStateType } from "@/store/store";
import styles from './DiscountForm.module.scss';
import Tooltip from "@mui/material/Tooltip";
import {Button, Input, Products} from "@/shared";

interface DiscountFormProps {
  period: keyof typeof Products;
}

const DiscountForm: React.FC<DiscountFormProps> = ({ period }) => {
  const { discountErrorMessage, errorMessage, pending, formik } = useAddDiscount(period);
  const { discountCode, message } = useSelector((state: AppRootStateType) => state.discount);

  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    let hideTooltipTimer: NodeJS.Timeout;

    if (showTooltip) {
      hideTooltipTimer = setTimeout(() => {
        setShowTooltip(false);
      }, 5000);
    }

    return () => clearTimeout(hideTooltipTimer);
  }, [showTooltip]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(event);
    if (event.target.value) {
      setShowTooltip(true);
    } else {
      setShowTooltip(false);
    }
  };

  const handleBlur = () => {
    if (formik.values.discount) {
      setTimeout(() => {
        setShowTooltip(true);
      }, 1000);
    }
  };

  return (
    <Box pb={3}>
      {errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
      {Array.isArray(message) ? (
        message.map((msg, index) => (
          <p key={index} className={styles.infoMessage}>{msg}</p>
        ))
      ) : (
        <p className={styles.infoMessage}>{message}</p>
      )}
      {!discountCode && (
        <div className={styles.formContainer}>
          <Tooltip
            PopperProps={{
              modifiers: [
                {
                  name: 'flip',
                  options: {
                    fallbackPlacements: ['right', 'bottom', 'top', 'left'],
                  },
                },
              ],
            }}
            placement={"bottom"}
            sx={{ fontSize: '16px' }}
            title={'Please, don\'t forget to apply discount that you\'ve entered.'}
            enterTouchDelay={0}
            leaveTouchDelay={4000}
            open={showTooltip}
          >
            <Input
              className={styles.inputAddStyles}
              id="discount"
              type={'text'}
              label={'Discount'}
              value={formik.values.discount}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={discountErrorMessage as any}
              disabled={pending}
            />
          </Tooltip>
          <Button
            className={styles.buttonAddStyles}
            onClick={formik.submitForm}
            disabled={pending}
            fullWidth={true}
          >
            {pending ? 'Sending...' : 'Apply discount'}
          </Button>
        </div>
      )}
    </Box>
  );
};

export default DiscountForm;
