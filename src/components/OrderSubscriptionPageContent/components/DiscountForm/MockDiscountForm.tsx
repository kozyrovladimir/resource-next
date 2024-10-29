import React from 'react';
import Box from "@mui/material/Box";
import styles from './DiscountForm.module.scss';
import {Button, Input} from "@/shared";

const MockDiscountForm: React.FC = () => {
  return (
    <Box pb={3} mb={3} sx={{borderBottom: '1px solid var(--color-border-grey-light)'}}>
      <div className={styles.formContainer}>
        <Input
          className={styles.inputAddStyles}
          id="discount"
          type={'text'}
          label={'Discount'}
          value={''}
          disabled={true}
        />
        <Button
          className={styles.buttonAddStyles}
          disabled={true}
          fullWidth={true}
        >
          Apply discount
        </Button>
      </div>
    </Box>
  );
};

export default MockDiscountForm;
