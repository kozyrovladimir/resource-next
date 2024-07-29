import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../api/api';
import { userSlice } from '../reducers/user-reducer.slice';
import { axiosErrorHandler } from '../../utils/helpers/axiosErrorHandler';
import {StripePaymentInfoI} from "../../models/StripePaymentInfo";

export const fetchStripePaymentDetails = createAsyncThunk<
  StripePaymentInfoI,
  undefined,
  { rejectValue: string }
>(
  'stripePaymentDetails/fetchStripePaymentDetails',
  async function (_, { dispatch, rejectWithValue }) {
    const { setUser } = userSlice.actions;

    try {
      const response = await api.requestStripePaymentDetailsForTeacherTrainingCourse();
      const stripePaymentDetails = response.data;
      const authorized = response.headers.authorized;

      if (authorized === 'false') {
        dispatch(setUser(false));
      } else {
        dispatch(setUser(true));
      }

      return stripePaymentDetails;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  },
);
