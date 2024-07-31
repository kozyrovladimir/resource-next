import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosErrorHandler } from '@/utils/helpers/axiosErrorHandler';

import {api} from '@/shared';
import {VideoListItemI} from '@/models/VideoListItem';
import { userSlice } from '../reducers/user-reducer.slice';

export const fetchVideoListAPI = createAsyncThunk<
  VideoListItemI[],
  undefined,
  { rejectValue: string }
>('video-list/fetchVideoListAPI', async function (_, { dispatch, rejectWithValue }) {
  const { setUser, setSubscriptionStatus } = userSlice.actions;

  try {
    const response = await api.getVideos();

    const videos = response.data;
    const authorized = response.headers.authorized;
    const subscriptionStatus = response.headers['subscription-status'];

    if (authorized === 'false') {
      dispatch(setUser(false));
      // localStorage.removeItem('token');
      // console.log('unauthorized');
    } else {
      dispatch(setUser(true));
      dispatch(setSubscriptionStatus(subscriptionStatus));
      // console.log('authorized');
    }
    return videos;
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
});
