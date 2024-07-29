import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppRootStateType } from "@/store/store";
import { VideoListItemI } from "@/models/VideoListItem";
import { fetchFavoriteVideoListAPI } from "@/store/actionCreators/fetchFavoriteVideoListAPI";
import { usePathname } from "next/navigation";

export const useFetchFavoriteVideos = () => {
  const pathname = usePathname();
  const prevPathname = useRef<string | null>(null);

  const { videoList, isLoading, error } = useSelector<
    AppRootStateType,
    { videoList: VideoListItemI[]; isLoading: boolean; error: string | undefined }
  >(state => state.favoriteVideos);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // Если prevPathname пустой, значит это начальная загрузка, или если маршрут изменился на 'favourites'
    if ((prevPathname.current === null && pathname.includes('favourites')) ||
      (prevPathname.current !== null && !prevPathname.current.includes('favourites') && pathname.includes('favourites'))) {
      dispatch(fetchFavoriteVideoListAPI());
    }
    prevPathname.current = pathname;
  }, [dispatch, pathname]);

  return { videoList, isLoading, error };
};

