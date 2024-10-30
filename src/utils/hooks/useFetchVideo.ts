import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppRootStateType} from "@/store/store";
import {fetchVideoDetailsAPI} from "@/store/actionCreators/fetchVideoDetails";
import {VideoDetailAPIT} from "@/shared/models";

export const useFetchVideo = (videoId: string) => {

  const dispatch = useDispatch<AppDispatch>();

  const {
    videoDetail,
    isLoading: isLoadingVideoDetail,
    error: errorVideoDetail
  } = useSelector<AppRootStateType, VideoDetailAPIT>(
    state => state.videoDetailsAPI,
  );

  const refreshVideoDetails = () => {
    dispatch(fetchVideoDetailsAPI({videoId: videoId}));
  }

  useEffect(() => {
    if (videoId) {
      dispatch(fetchVideoDetailsAPI({videoId: videoId}));
    }
  }, [videoId]);

  return {videoDetail, isLoadingVideoDetail, errorVideoDetail, refreshVideoDetails};
}
