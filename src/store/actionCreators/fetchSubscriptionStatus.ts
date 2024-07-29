import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosErrorHandler } from '../../utils/helpers/axiosErrorHandler';

import { SubscriptionStatus } from '../../models/SubscriptionStatus';
import { userSlice } from '../reducers/user-reducer.slice';
import {getSubscriptionStatus} from "../../api/api";

export const fetchSubscriptionStatus = createAsyncThunk<
  SubscriptionStatus,
  undefined,
  { rejectValue: string }
>(
  'subscriptionStatus/fetchSubscriptionStatus',
  async function (_, { dispatch, rejectWithValue }) {
    const { setUser } = userSlice.actions;

    try {
      const response = await getSubscriptionStatus();
      const subscriptionStatus = response.data;
      const authorized = response.headers.authorized;

      if (authorized === 'false') {
        dispatch(setUser(false));
      } else {
        dispatch(setUser(true));
      }

      return subscriptionStatus;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  },
);
