import { createAsyncThunk } from '@reduxjs/toolkit';

import {axiosErrorHandler} from "@/utils/helpers/axiosErrorHandler";
import {userSlice} from "@/store/reducers/user-reducer.slice";
import {VideoDetailsI} from "@/shared/models";
import {getVideo} from "@/shared/api/api";

export const fetchVideoDetailsAPI = createAsyncThunk<
  VideoDetailsI,
  { videoId: string; isFavorite: boolean },
  { rejectValue: string }
>('video', async function (info, { dispatch, rejectWithValue }) {
  const { setUser } = userSlice.actions;

  try {
    const response = await getVideo(info.videoId);

    const videoDetails = response.data;

    const authorized = response.headers.authorized;

    if (authorized === 'false') {
      dispatch(setUser(false));
      localStorage.removeItem('token');
    } else {
      dispatch(setUser(true));
    }

    videoDetails.is_favorite = info.isFavorite;

    return videoDetails;
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
});
