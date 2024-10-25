'use client';

import React from 'react';
import {VideoDetailsI} from "@/shared/models";
import KinescopePlayer from '@kinescope/react-kinescope-player';

function extractIdFromUrl(url: string): string {
  const match = url.match(/\/([^/]+)$/);
  return match && match[1] ? match[1] : url;
}

type KinescopeVideoPlayerProps = {
  video: VideoDetailsI;
}

const KinescopeVideoPlayer: React.FC<KinescopeVideoPlayerProps> = ({video}) => {

  return (
      <KinescopePlayer
        videoId={extractIdFromUrl(video.link)}
      />
  );
};

export default KinescopeVideoPlayer;
