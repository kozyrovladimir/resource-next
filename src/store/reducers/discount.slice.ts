import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DiscountInfoI {
  payment_required: boolean;
  message: string | string[];
}
export interface DiscountI extends DiscountInfoI {
  discountCode: string;
}

const initialDiscountState: DiscountI = {
  discountCode: '',
  payment_required: true,
  message: '',
};

export const discountSlice = createSlice({
  name: 'discount',
  initialState: initialDiscountState,
  reducers: {
    setDiscount(
      state = initialDiscountState,
      action: PayloadAction<DiscountI>,
    ) {
      state.discountCode = action.payload.discountCode;
      state.payment_required = action.payload.payment_required;
      state.message = action.payload.message;
    },
    clearDiscount(state) {
      state.discountCode = '';
      state.payment_required = true;
      state.message = '';
    }
  },
});

export const { setDiscount, clearDiscount } = discountSlice.actions;

export default discountSlice.reducer;
