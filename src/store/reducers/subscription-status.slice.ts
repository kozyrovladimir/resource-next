import { createSlice } from '@reduxjs/toolkit';

import { SubscriptionStatus } from '../../models/SubscriptionStatus';
import { fetchSubscriptionStatus } from '../actionCreators/fetchSubscriptionStatus';

export interface SubscriptionStatusAPII {
  subscriptionStatus: SubscriptionStatus;
  isLoading: boolean;
  error: string | undefined;
}

const initialSubscriptionStatusState: SubscriptionStatusAPII = {
  subscriptionStatus: {} as SubscriptionStatus,
  isLoading: false,
  error: '',
};

export const subscriptionStatusSlice = createSlice({
  name: 'subscriptionStatus',
  initialState: initialSubscriptionStatusState,
  reducers: {
    setSubscriptionStatus(state, action) {
      state.subscriptionStatus = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchSubscriptionStatus.fulfilled, (state, action) => {
      state.subscriptionStatus = action.payload;
      state.isLoading = false;
      state.error = undefined;
    });
    builder.addCase(fetchSubscriptionStatus.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchSubscriptionStatus.pending, state => {
      state.isLoading = true;
      state.error = undefined;
    });
  },
});

export default subscriptionStatusSlice.reducer;
