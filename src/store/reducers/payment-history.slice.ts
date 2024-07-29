import { createSlice } from '@reduxjs/toolkit';

import { PaymentHistoryItem } from '../../models/PaymentHistory';
import { fetchPaymentHistory } from '../actionCreators/fetchPaymentHistory';

export interface PaymentHistoryAPII {
  paymentHistory: PaymentHistoryItem[];
  isLoading: boolean;
  error: string | undefined;
}

const initialPaymentInformationState: PaymentHistoryAPII = {
  paymentHistory: [] as PaymentHistoryItem[],
  isLoading: false,
  error: '',
};

export const paymentHistorySlice = createSlice({
  name: 'paymentHistory',
  initialState: initialPaymentInformationState,
  reducers: {
    setPaymentInformation(state, action) {
      state.paymentHistory = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPaymentHistory.fulfilled, (state, action) => {
      state.paymentHistory = action.payload;
      state.isLoading = false;
      state.error = undefined;
    });
    builder.addCase(fetchPaymentHistory.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchPaymentHistory.pending, state => {
      state.isLoading = true;
      state.error = undefined;
    });
  },
});

export default paymentHistorySlice.reducer;
