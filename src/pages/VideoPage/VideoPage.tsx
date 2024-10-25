import React from 'react';
import styles from './VideoPage.module.css';
import AddToFavourites from "@/features/AddToFavourites/AddToFavourites";
import {VideoTag} from "@/entities/VideoTag";
import {SearchOptions, VideoDetailsI} from "@/shared/models";
import KinescopeVideoPlayer from "@/features/KinescopeVideoPlayer/KinescopeVideoPlayer";

type VideoPageProps = {
  video: VideoDetailsI;
};

const VideoPage: React.FC<VideoPageProps> = ({video}) => {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.videoContainer}>
        <KinescopeVideoPlayer
          video={video}
        />
      </div>
      <div className={styles.infoContainer}>
        <h2 className={styles.videoTitle}>{video.title}</h2>
        <div className={styles.authorInfoContainer}>
          <p className={styles.authorInfoText}>Author: <span>Marisa Cranfill</span></p>
        </div>
        <AddToFavourites
          id={1}
          isFavouriteInitial={false}
        />
        <div className={styles.tagColumnsContainer}>
          <div className={styles.videoTagsContainer}>
            <VideoTag
              name={SearchOptions.phase}
              value={video.phase}
            />
            <VideoTag
              name={SearchOptions.element}
              value={video.element}
            />
            <VideoTag
              name={SearchOptions.organ}
              value={video.organ}
            />
          </div>
          <div className={styles.videoTagsContainer}>
            <VideoTag
              name={SearchOptions.season}
              value={video.season}
            />
            {video.meridian && <VideoTag
              name={SearchOptions.meridian}
              value={video.meridian}
            />}
            <VideoTag
              name={SearchOptions.dantain}
              value={video.dantian}
            />
          </div>
        </div>
        <p>Clears tention in the belt channel and the kidneys. Clears cold from the
          kidneys. Clears fear, stress, excess cortisol.</p>
        {video.benefits && <div className={styles.textContainer}>
          <h3>Benefits</h3>
          <p>{video.benefits}</p>
        </div>}
        <div className={styles.textContainer}>
          <h3>How to do the flow</h3>
          <p>Do in the best way possible</p>
        </div>
        {video.pro_tips && <div className={styles.textContainer}>
          <h3>Pro Tips</h3>
          <p>{video.pro_tips}</p>
        </div>}
      </div>
    </div>
  );
};

export default VideoPage;
