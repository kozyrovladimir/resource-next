'use client';

import React from 'react';
import {VideoDetailsI} from "@/shared/models";
import KinescopePlayer from '@kinescope/react-kinescope-player';
import {useFetchVideo} from "@/utils/hooks/useFetchVideo";

function extractIdFromUrl(url: string): string {
  const match = url.match(/\/([^/]+)$/);
  return match && match[1] ? match[1] : url;
}

type KinescopeVideoPlayerProps = {
  video: VideoDetailsI;
}

const KinescopeVideoPlayer: React.FC<KinescopeVideoPlayerProps> = ({video}) => {

  const {videoDetail, isLoadingVideoDetail, errorVideoDetail} = useFetchVideo(video.id.toString());

  if (isLoadingVideoDetail) {
    return <div>Loading...</div>;
  }

  if (errorVideoDetail) {
    return <div>Error: {errorVideoDetail}</div>;
  }

  return (
      <KinescopePlayer
        videoId={extractIdFromUrl(videoDetail.link)}
      />
  );
};

export default KinescopeVideoPlayer;
