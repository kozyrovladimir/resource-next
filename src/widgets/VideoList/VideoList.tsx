"use client";

import React from 'react';
import {useFetchVideos} from "@/utils/hooks/useFetchVideos";
import VideoCard from "@/features/VideoCard/ui/VideoCard";
import VideoCategoryGridContainer
  from "@/shared/ui/VideoCategoryGridContainer/VideoCategoryGridContainer";
import useFilteredParams from "@/utils/hooks/useFilteredParams";

const VideoList = () => {
  const {videoList, isLoading, error} = useFetchVideos();

  const params = useFilteredParams();

  const filtersKeys = Object.keys(params.filters).filter((key) => params.filters[key as keyof typeof params.filters]);

  const filteredVideos = videoList.filter((video) => {
    return filtersKeys.every((key) => {
      return video[key as keyof typeof video] === params.filters[key as keyof typeof params.filters];
    });
  });

  const filteredVideosBySearch = filteredVideos.filter((video) => {
      return video.title.toLowerCase().includes((params.search ?? '').toLowerCase());
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!filteredVideosBySearch.length) {
    return <div>No videos found</div>;
  }

  return (
    <VideoCategoryGridContainer>
      {
        filteredVideosBySearch.map((video) => {
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
