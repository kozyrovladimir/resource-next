import React from 'react';
import {useFetchFavoriteVideos} from "@/utils/hooks/useFetchFavoriteVideos";

const FavouriteVideoList = () => {
  const {videoList, isLoading, error} = useFetchFavoriteVideos();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>

    </div>
  );
};

export default FavouriteVideoList;
