'use client';

import React, {useRef} from 'react';
import {VideoDetailsI} from "@/shared/models";
import loader from "@/assets/images/logo-loader-svg.svg";
import {Button} from "@/shared";

function replacePlayWithEmbed(url: string): string {
  return url.replace('/play/', '/embed/') + '?chromecast=true';
}

type VideoPlayerProps = {
  video: VideoDetailsI;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({video}) => {
  console.log('video data: ', video);

  const playerRef = useRef<HTMLIFrameElement>(null);

  const mainPart = video.link;
  const sideView = video.sideview_link;
  const variations = video.variations_link;

  const [currentVideo, setCurrentVideo] = React.useState(mainPart);

  const isMainPart = currentVideo === mainPart;
  const isSideView = currentVideo === sideView;
  const isVariations = currentVideo === variations;

  const mainPartButtonVariant = isMainPart ? 'primary' : 'outlined';
  const sideViewButtonVariant = isSideView ? 'primary' : 'outlined';
  const variationsButtonVariant = isVariations ? 'primary' : 'outlined';

  const mainOnCLick = () => {
    setCurrentVideo(mainPart);
  }

  const sideViewOnCLick = () => {
    setCurrentVideo(sideView);
  }

  const variationsOnCLick = () => {
    setCurrentVideo(variations);
  }

  return (
    <>
      <div style={{
        position: "relative",
        paddingTop: "56.25%",
        backgroundImage: `url(${loader})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "150px",
      }}>
        <iframe
          ref={playerRef}
          id="bunny-stream-embed"
          src={replacePlayWithEmbed(currentVideo)}
          style={{
            border: "none",
            borderRadius: "10px",
            top: 0,
            position: "absolute",
            width: "100%",
            height: "100%"
          }}
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
          allowFullScreen={true}
          width={"100%"}
          height={"100%"}
        />
      </div>
      <Button variant={mainPartButtonVariant} onClick={mainOnCLick}>Main</Button>
      <Button variant={sideViewButtonVariant} onClick={sideViewOnCLick}>Side view</Button>
      <Button variant={variationsButtonVariant}
              onClick={variationsOnCLick}>Variations</Button>
    </>
  )
}

export default VideoPlayer;
