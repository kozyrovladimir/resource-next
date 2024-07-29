import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../api/api';
// import * as mockAPI from '../../api/mockAPI';
import { PaymentHistoryItem } from '../../models/PaymentHistory';
import { userSlice } from '../reducers/user-reducer.slice';
import { axiosErrorHandler } from '../../utils/helpers/axiosErrorHandler';

export const fetchPaymentHistory = createAsyncThunk<
  PaymentHistoryItem[],
  undefined,
  { rejectValue: string }
>(
  'paymentHistory/fetchPaymentHistory',
  async function (_, { dispatch, rejectWithValue }) {
    const { setUser } = userSlice.actions;

    try {
      const response = await api.getPaymentHistory();
      // temporary mockAPI
      // const response = await mockAPI.getPaymentInformation();
      const paymentInformation = response.data;
      const authorized = response.headers.authorized;

      if (authorized === 'false') {
        dispatch(setUser(false));
        // localStorage.removeItem('token');
      } else {
        dispatch(setUser(true));
      }
      // console.log('payment info:', paymentInformation);

      return paymentInformation;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  },
);
