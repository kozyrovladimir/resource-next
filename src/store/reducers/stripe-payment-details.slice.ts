import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { fetchStripePaymentDetails } from '../actionCreators/fetchStripePaymentDetails';
import {StripePaymentInfoI} from "../../models/StripePaymentInfo";

export interface StripePaymentDetailsAPII {
  stripePaymentDetails: StripePaymentInfoI;
  isLoading: boolean;
  error: string | undefined;
}

const initialStripePaymentDetailsState: StripePaymentDetailsAPII = {
  stripePaymentDetails: {} as unknown as StripePaymentInfoI,
  isLoading: false,
  error: '',
};

export const stripePaymentDetailsSlice = createSlice({
  name: 'stripePaymentDetails',
  initialState: initialStripePaymentDetailsState,
  reducers: {
    setStripePaymentDetails(state, action: PayloadAction<StripePaymentInfoI>) {
      state.stripePaymentDetails = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchStripePaymentDetails.fulfilled, (state, action) => {
      state.stripePaymentDetails = action.payload;
      state.isLoading = false;
      state.error = undefined;
    });
    builder.addCase(fetchStripePaymentDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchStripePaymentDetails.pending, state => {
      state.isLoading = true;
      state.error = undefined;
    });
  },
});

export const { setStripePaymentDetails } = stripePaymentDetailsSlice.actions;

export default stripePaymentDetailsSlice.reducer;
