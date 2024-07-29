import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { fetchVideoDetailsAPI } from '../actionCreators/fetchVideoDetails';

import {
  VideoDetailAPIT,
  VideoDetailsWithSubscriptionStatusI
} from '../../models/VideoDetails';

const videoDetailInitialSate: VideoDetailAPIT = {
  isLoading: false,
  error: '',
  videoDetail: {} as VideoDetailsWithSubscriptionStatusI,
};

const videoDetailSlice = createSlice({
  name: 'video',
  initialState: videoDetailInitialSate,
  reducers: {
    setVideoDetail(state = videoDetailInitialSate, action: PayloadAction<VideoDetailsWithSubscriptionStatusI>) {
      state.videoDetail = action.payload;
    },
    setVideoIsLoading(state = videoDetailInitialSate, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchVideoDetailsAPI.pending, state => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(fetchVideoDetailsAPI.fulfilled, (state, action) => {
      state.isLoading = false;
      state.videoDetail = action.payload;
      state.error = undefined;
    });
    builder.addCase(fetchVideoDetailsAPI.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { setVideoDetail, setVideoIsLoading } = videoDetailSlice.actions;

export default videoDetailSlice.reducer;
