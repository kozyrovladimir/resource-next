import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosErrorHandler } from '@/utils/helpers/axiosErrorHandler';

import * as api from '../../api/api';
import { userSlice } from '../reducers/user-reducer.slice';

const projectID = 2;

// there is without any type unlike in the fetchVideoListAPI action creator
export const fetchFavoriteVideoListAPI = createAsyncThunk(
  'favorite-video-list/fetchFavoriteVideoListAPI',
  async function (_, { dispatch, rejectWithValue })  {
    const { setUser } = userSlice.actions;

    try {
      const response = await api.getFavourites();

      const videos = response.data.filter(video => video.favourites.some(favourite => favourite.project_id === projectID));
      const authorized = response.headers.authorized;

      if (authorized === 'false') {
        dispatch(setUser(false));
      } else {
        dispatch(setUser(true));
      }
      return videos;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  },
);
