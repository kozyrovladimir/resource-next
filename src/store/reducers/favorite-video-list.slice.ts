import {FetchVideosI} from "./video-list-api.slice";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchFavoriteVideoListAPI} from "../actionCreators/fetchFavoriteVideoListAPI";
import {VideoListItemI} from "@/shared/models";

export interface FetchFavoriteVideosI {
  videoList: VideoListItemI[];
  isLoading: boolean;
  error: string | undefined;
}

const initialApiState: FetchVideosI = { videoList: [], isLoading: false, error: '' };

const favoriteVideoListAPISlice = createSlice({
  name: 'favorite-video-list',
  initialState: initialApiState,
  reducers: {
    setFavoriteVideoListAPI(
      state = initialApiState,
      action: PayloadAction<{ videoListAPI: VideoListItemI[] }>,
    ) {
      state.videoList = action.payload.videoListAPI;
    },
    deleteFavoriteVideoListAPI(state = initialApiState, action: PayloadAction<{ videoId: number }>) {
      state.videoList = state.videoList.filter(video => video.id !== action.payload.videoId);
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchFavoriteVideoListAPI.pending, state => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(fetchFavoriteVideoListAPI.fulfilled, (state, action) => {
      state.isLoading = false;
      state.videoList = action.payload;
      state.error = undefined;
    });
    builder.addCase(fetchFavoriteVideoListAPI.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { setFavoriteVideoListAPI, deleteFavoriteVideoListAPI } = favoriteVideoListAPISlice.actions;

export default favoriteVideoListAPISlice.reducer;
