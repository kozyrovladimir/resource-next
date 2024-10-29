'use client';

import React, {useEffect, useRef} from 'react';
import {VideoDetailsI} from "@/shared/models";
import loader from "@/assets/images/logo-loader-svg.svg";
import {Button} from "@/shared";
import {clsx} from "clsx";
import styles from "./VideoPlayer.module.scss"

function replacePlayWithEmbed(url: string): string {
  return url.replace('/play/', '/embed/') + '?chromecast=true';
}

type VideoPlayerProps = {
  video: VideoDetailsI;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({video}) => {

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

  const handleOnEnded = () => {
    if (currentVideo === mainPart) {
      setCurrentVideo(sideView);
    }
    if (currentVideo === sideView) {
      setCurrentVideo(variations);
    }
  }

  const isTouchDevice = 'ontouchstart' in document.documentElement;

  const classNames = {
    mainButton: clsx(
      styles.button,
      isMainPart && styles.button_active,
      isTouchDevice && styles.button_touchable,
      isTouchDevice && isMainPart && styles.button_active_touchable,
    ),
    sideButton: clsx(
      styles.button,
      isSideView && styles.button_active,
      isTouchDevice && styles.button_touchable,
      isTouchDevice && isSideView && styles.button_active_touchable,
    ),
    variationsButton: clsx(
      styles.button,
      isVariations && styles.button_active,
      isTouchDevice && styles.button_touchable,
      isTouchDevice && isVariations && styles.button_active_touchable,
    ),
  }

  useEffect(() => {
    // @ts-expect-error
    const player = new playerjs.Player(playerRef.current);

    player.on('ended', handleOnEnded);
  }, [
    playerRef,
    currentVideo
  ]);

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
      <div className={styles.buttonsWrapper}>
        <Button variant={mainPartButtonVariant} onClick={mainOnCLick} className={classNames.mainButton}>Main</Button>
        <Button variant={sideViewButtonVariant} onClick={sideViewOnCLick} className={classNames.sideButton}>Side view</Button>
        <Button variant={variationsButtonVariant}
                onClick={variationsOnCLick} className={classNames.variationsButton}>Variations</Button>
      </div>
    </>
  )
}

export default VideoPlayer;
