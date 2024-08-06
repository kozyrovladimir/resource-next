"use client";

import React from 'react';
import {useFetchVideos} from "@/utils/hooks/useFetchVideos";
import VideoCard from "@/features/VideoCard/ui/VideoCard";
import VideoCategoryGridContainer
  from "@/shared/ui/VideoCategoryGridContainer/VideoCategoryGridContainer";
import useFilteredParams from "@/utils/hooks/useFilteredParams";

const VideoList = () => {
  const {videoList, isLoading, error} = useFetchVideos();

  const filters = useFilteredParams();

  const filtersKeys = Object.keys(filters).filter((key) => filters[key as keyof typeof filters]);

  const filteredVideos = videoList.filter((video) => {
    return filtersKeys.every((key) => {
      console.log(key, video[key as keyof typeof video], filters[key as keyof typeof filters]);
      return video[key as keyof typeof video] === filters[key as keyof typeof filters];
    });
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <VideoCategoryGridContainer>
      {
        filteredVideos.map((video) => {
          return (
            <VideoCard
              key={video.id}
              video={video}
            />
          )
        })}
    </VideoCategoryGridContainer>
  );
};

export default VideoList;
