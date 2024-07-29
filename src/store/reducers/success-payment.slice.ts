import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PurchaseInfo } from "../../models/PurchaseInfo";

export const successPaymentSlice = createSlice({
  name: 'successPayment',
  initialState: {} as PurchaseInfo,
  reducers: {
    setSuccessPayment(state, action: PayloadAction<PurchaseInfo>) {
      return action.payload;
    },
    clearSuccessPayment(state) {
      return {} as PurchaseInfo;
    }
  },
});

export const { setSuccessPayment, clearSuccessPayment } = successPaymentSlice.actions;
export default successPaymentSlice.reducer;

