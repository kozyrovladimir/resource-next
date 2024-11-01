'use client';

import React, {useEffect} from 'react';
import styles from './VideoPage.module.css';
import AddToFavourites from "@/features/AddToFavourites/AddToFavourites";
import {VideoTag} from "@/entities/VideoTag";
import {SearchOptions} from "@/shared/models";
import VideoPlayer from "@/features/VideoPlayer/VideoPlayer";
import {useFetchVideo} from "@/utils/hooks/useFetchVideo";
import {useIsAuthorised} from "@/utils/hooks/useIsAuthorised";
import VideoThumbnail from "@/features/VideoThumbnail/VideoThumbnail";

type VideoPageProps = {
  videoID: string;
};

const VideoPage: React.FC<VideoPageProps> = ({videoID}) => {

  const {videoDetail, isLoadingVideoDetail, errorVideoDetail, refreshVideoDetails} = useFetchVideo(videoID);

  const isAuthorised = useIsAuthorised();
  const accessible = videoDetail.link && videoDetail.sideview_link && videoDetail.variations_link;

  useEffect(() => {
    refreshVideoDetails();
  }, [isAuthorised]);

  if (isLoadingVideoDetail || !videoDetail.id) {
    return <div>Loading...</div>;
  }

  if (errorVideoDetail) {
    return <div>Error: {errorVideoDetail}</div>;
  }

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.videoContainer}>
        {
          !accessible || !isAuthorised ? (
            <VideoThumbnail videoDetails={videoDetail} />
          ) : (
            <VideoPlayer video={videoDetail} />
          )
        }
      </div>
      <div className={styles.infoContainer}>
        <h2 className={styles.videoTitle}>{videoDetail.title}</h2>
        <div className={styles.authorInfoContainer}>
          <p className={styles.authorInfoText}>Author: <span>Marisa Cranfill</span></p>
        </div>
        <AddToFavourites
          id={videoDetail.id}
          isFavouriteInitial={false}
        />
        <div className={styles.tagColumnsContainer}>
          <div className={styles.videoTagsContainer}>
            <VideoTag
              name={SearchOptions.phase}
              value={videoDetail.phase}
            />
            <VideoTag
              name={SearchOptions.element}
              value={videoDetail.element}
            />
            <VideoTag
              name={SearchOptions.organ}
              value={videoDetail.organ}
            />
          </div>
          <div className={styles.videoTagsContainer}>
            <VideoTag
              name={SearchOptions.season}
              value={videoDetail.season}
            />
            {videoDetail.meridian && <VideoTag
              name={SearchOptions.meridian}
              value={videoDetail.meridian}
            />}
            <VideoTag
              name={SearchOptions.dantian}
              value={videoDetail.dantian}
            />
          </div>
        </div>
        {videoDetail.benefits && <div className={styles.textContainer}>
          <h3>Benefits</h3>
          <p>{videoDetail.benefits}</p>
        </div>}
        {videoDetail.flow_variations&&<div className={styles.textContainer}>
          <h3>How to do the flow</h3>
          <p>{videoDetail.flow_variations}</p>
        </div>}
        {videoDetail.pro_tips && <div className={styles.textContainer}>
          <h3>Pro Tips</h3>
          <p>{videoDetail.pro_tips}</p>
        </div>}
      </div>
    </div>
  );
};

export default VideoPage;
