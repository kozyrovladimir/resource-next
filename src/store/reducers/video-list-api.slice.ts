// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


import { fetchVideoListAPI } from '../actionCreators/fetchVideoListAPI';
import {VideoListItemI} from "@/shared/models";

export interface FetchVideosI {
  videoList: VideoListItemI[];
  isLoading: boolean;
  error: string | undefined;
}

const initialApiState: FetchVideosI = { videoList: [], isLoading: false, error: '' };

const videoListAPISlice = createSlice({
  name: 'video-list',
  initialState: initialApiState,
  reducers: {
    setVideoListAPI(
      state = initialApiState,
      action: PayloadAction<{ videoListAPI: VideoListItemI[] }>,
    ) {
      state.videoList = action.payload.videoListAPI;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchVideoListAPI.pending, state => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(fetchVideoListAPI.fulfilled, (state, action) => {
      state.isLoading = false;
      state.videoList = action.payload;
      state.error = undefined;
    });
    builder.addCase(fetchVideoListAPI.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { setVideoListAPI } = videoListAPISlice.actions;

export default videoListAPISlice.reducer;
