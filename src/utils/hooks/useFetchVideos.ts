import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideoListAPI } from '@/store/actionCreators/fetchVideoListAPI';
import { FetchVideosI } from '@/store/reducers/video-list-api.slice';
import { AppDispatch, AppRootStateType } from '@/store/store';
import {VideoListItemI} from "@/shared/models";

export const useFetchVideos = (): FetchVideosI => {
  const { videoList, isLoading, error } = useSelector<
    AppRootStateType,
    { videoList: VideoListItemI[]; isLoading: boolean; error: string | undefined }
  >(state => ({
    videoList: state.videoListAPI.videoList,
    isLoading: state.videoListAPI.isLoading,
    error: state.videoListAPI.error,
  }));

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (videoList.length === 0 && !isLoading && !error) {
      dispatch(fetchVideoListAPI());
    }
  }, [dispatch, videoList.length, isLoading, error]);

  return { videoList, isLoading, error };
};

