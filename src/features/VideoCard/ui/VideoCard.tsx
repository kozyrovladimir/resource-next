import React from 'react';
import styles from './VideoCard.module.scss';
import Link from "next/link";
import Image from "next/image";

import {
  defineElementColor,
  definePhaseColor,
  defineSeasonColor,
  defineOrganColor
} from '@/shared/lib/helpers';

import {VideoListItemTag} from './VideoListItemTag';
import {VideoListItemI} from "@/shared/models";
import Box from "@mui/material/Box";
import {useUpdateQueryString} from "@/utils/hooks/useUpdateQueryString";

interface VideoListItemTypeProps {
  video: VideoListItemI;
}

const VideoCard: React.FC<VideoListItemTypeProps> = ({video}) => {
  const phaseColor = definePhaseColor(video.phase);
  const elementColor = defineElementColor(video.element);
  const seasonColor = defineSeasonColor(video.season);
  const organColor = defineOrganColor(video.organ);

  const updateQueryString = useUpdateQueryString();

  const phaseOnClick = () => {
    updateQueryString('phase', video.phase);
  };

  const seasonOnClick = () => {
    updateQueryString('season', video.season);
  };

  const elementOnClick = () => {
    updateQueryString('element', video.element);
  };

  const organOnClick = () => {
    updateQueryString('organ', video.organ);
  };


  const onClickHandler = () => console.log(`move to video page ${video.id}`);

  return (
    <div data-testid="video_card" className={styles.videoCard}>
      <Link href={{
        pathname: `/video/1`,
      }}
            scroll={true}
      >
        <div className={styles.videoCardImage}>
          <Image fill={true}
                 src={video.thumbnail || 'https://static.yoqi.run/resource/movement_thumbs/iron_bridge.jpg'}
                 alt="thumbnail" sizes={'100%'}/>
        </div>
      </Link>
      <div>
        <div className={styles.videoCardTitle}>
          <span data-testid="video_card__title">
            {video.title}
          </span>
        </div>
        <Box sx={{flexGrow: 1, display: 'flex', marginTop: '4px'}}>
          <VideoListItemTag color={phaseColor}
                            onClick={phaseOnClick}>
            {video.phase}
          </VideoListItemTag>
          <VideoListItemTag color={elementColor}
                            onClick={elementOnClick}>
            {video.element}
          </VideoListItemTag>
          <VideoListItemTag color={seasonColor}
                            onClick={seasonOnClick}>
            {video.season}
          </VideoListItemTag>
          <VideoListItemTag color={organColor}
                            onClick={organOnClick}>
            {video.organ}
          </VideoListItemTag>
        </Box>
        <div className={styles.videoCardInfo}>
          <p data-testid="video_card__short_description">{video.description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

