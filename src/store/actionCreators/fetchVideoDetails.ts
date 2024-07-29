import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../api/api';
import {
  VideoDetailsWithSubscriptionStatusI
} from '../../models/VideoDetails';
import { userSlice } from '../reducers/user-reducer.slice';
import { axiosErrorHandler } from '../../utils/helpers/axiosErrorHandler';

export const fetchVideoDetailsAPI = createAsyncThunk<
  VideoDetailsWithSubscriptionStatusI,
  { videoId: string },
  { rejectValue: string }
>('video', async function (info, { dispatch, rejectWithValue }) {
  const { setUser } = userSlice.actions;

  try {
    const response = await api.getVideo(info.videoId);

    const videoDetails = response.data;

    const authorized = response.headers.authorized;
    const subscriptionStatus = response.headers['subscription-status'];

    if (authorized === 'false') {
      dispatch(setUser(false));
      // localStorage.removeItem('token');
    } else {
      dispatch(setUser(true));
    }

    return {...videoDetails, subscriptionStatus};
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
});
