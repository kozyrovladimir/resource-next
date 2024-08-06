import { createSlice, PayloadAction} from '@reduxjs/toolkit';

import { fetchVideoDetailsAPI } from '../actionCreators/fetchVideoDetails';
import {VideoDetailAPIT, VideoDetailsI} from "@/shared/models";

const videoDetailInitialSate: VideoDetailAPIT = {
  isLoading: false,
  error: '',
  videoDetail: {
    id: 1,
    title: 'TT ATTUNE- Earth  Purification',
    phase: 'purge',
    season: 'late summer',
    organ: 'spleen',
    element: 'earth',
    dantian: 'Upper',
    meridian: 'stomach',
    description: 'Description for Earth purification Video',
    benefits: 'This will help you to enhance all your strength',
    flowvariations: 'Do in the best way paossible',
    tipstopro: 'Do your best and you will get result',
    link: 'https://kinescope.io/201442647',
    sideview: 'https://kinescope.io/201442647',
    variations: 'https://kinescope.io/201442647',
    thumbnail: null,
    createdAt: null,
    updatedAt: null,
    video_refs: [],
    add_corresponds: [],
    is_favorite: false,
  },
};

const videoDetailSlice = createSlice({
  name: 'video',
  initialState: videoDetailInitialSate,
  reducers: {
    setVideoDetail(state = videoDetailInitialSate, action: PayloadAction<VideoDetailsI>) {
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
