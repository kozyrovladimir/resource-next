"use client";

import React from 'react';
import {useFetchVideos} from "@/utils/hooks/useFetchVideos";
import VideoCard from "@/features/VideoCard/ui/VideoCard";
import VideoCategoryGridContainer
  from "@/shared/ui/VideoCategoryGridContainer/VideoCategoryGridContainer";

const VideoList = () => {
  const {videoList, isLoading, error} = useFetchVideos();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <VideoCategoryGridContainer>
      {
        videoList.map((video) => {
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
