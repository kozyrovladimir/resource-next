import { createAsyncThunk } from '@reduxjs/toolkit';

import { userSlice } from '../reducers/user-reducer.slice';
import { axiosErrorHandler } from '@/utils/helpers/axiosErrorHandler';
import {getVideo} from "@/shared/api/api";
import {VideoDetailsI} from "@/shared/models";

export const fetchVideoDetailsAPI = createAsyncThunk<
  VideoDetailsI,
  { videoId: string },
  { rejectValue: string }
>('video', async function (info, { dispatch, rejectWithValue }) {
  const { setUser } = userSlice.actions;

  try {
    const response = await getVideo(info.videoId);

    const videoDetails = response.data;

    const authorized = response.headers.authorized;
    // const subscriptionStatus = response.headers['subscription-status'];

    if (authorized === 'false') {
      dispatch(setUser(false));
    } else {
      dispatch(setUser(true));
    }

    // return {...videoDetails, subscriptionStatus};
    return videoDetails;
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
});
