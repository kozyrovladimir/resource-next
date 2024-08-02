"use client";

import React from 'react';
import {useFetchVideos} from "@/utils/hooks/useFetchVideos";
import VideoCard from "@/features/VideoCard/ui/VideoCard";

const VideoList = () => {
  const {videoList, isLoading, error} = useFetchVideos();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {
        videoList.map((video, index) => {
          return (
            <VideoCard
              video={video}
            />
          )
        })}
    </div>
  );
};

export default VideoList;
