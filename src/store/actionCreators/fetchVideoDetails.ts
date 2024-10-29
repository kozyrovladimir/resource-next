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

    if (videoDetails.link.length) {
      videoDetails.link = 'https://iframe.mediadelivery.net/play/209728/88fa6f9b-bb7f-46b2-9b8b-8a2ed4aae2a0'
    }

    if (videoDetails.sideview_link.length) {
      videoDetails.sideview_link = 'https://iframe.mediadelivery.net/play/209728/7b67ee7a-b70e-4305-bc48-fb714f47f763'
    }

    if (videoDetails.variations_link.length) {
      videoDetails.variations_link = 'https://iframe.mediadelivery.net/play/209728/7d2aa772-e3fd-4604-8640-d428866116fe'
    }


    return videoDetails;
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
});
