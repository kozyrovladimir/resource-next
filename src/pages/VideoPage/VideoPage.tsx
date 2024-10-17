import React from 'react';
import styles from './VideoPage.module.css';
import AddToFavourites from "@/features/AddToFavourites/AddToFavourites";
import {VideoTag} from "@/entities/VideoTag";
import {SearchOptions} from "@/shared/models";

const VideoPage = () => {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.videoContainer}>
        <span>Video content</span>
      </div>
      <div className={styles.infoContainer}>
        <h2 className={styles.videoTitle}>Iron Bridge</h2>
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
              name={SearchOptions.organ}
              value={'heart'}
            />
            <VideoTag
              name={SearchOptions.element}
              value={'earth'}
            />
            <VideoTag
              name={SearchOptions.dantain}
              value={'lower'}
            />
          </div>
          <div className={styles.videoTagsContainer}>
            <VideoTag
              name={SearchOptions.organ}
              value={'heart'}
            />
            <VideoTag
              name={SearchOptions.element}
              value={'earth'}
            />
            <VideoTag
              name={SearchOptions.dantain}
              value={'lower'}
            />
          </div>
        </div>
        <p>Clears tention in the belt channel and the kidneys. Clears cold from the
          kidneys. Clears fear, stress, excess cortisol.</p>
        <div className={styles.textContainer}>
          <h3>Benefits</h3>
          <p>This will help you to enhance all your strenth.</p>
        </div>
        <div className={styles.textContainer}>
          <h3>How to do the flow</h3>
          <p>Do in the best way possible</p>
        </div>
        <div className={styles.textContainer}>
          <h3>Pro Tips</h3>
          <p>Do your best and you will get result</p>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
