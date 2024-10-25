import React from 'react';
import styles from './VideoCard.module.scss';
import Link from "next/link";
import Image from "next/image";

import {
  defineElementColor,
  definePhaseColor,
  defineSeasonColor,
  defineOrganColor, formatTagString
} from '@/shared/lib/helpers';

import {VideoListItemTag} from './VideoListItemTag';
import {VideoListItemI} from "@/shared/models";
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

  return (
    <div data-testid="video_card" className={styles.videoCard}>
      <Link href={{
        pathname: `/video/${video.id}`,
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
        <div className={styles.videoCardTags}>
          {video.phase && <VideoListItemTag color={phaseColor}
                            onClick={phaseOnClick}>
            {formatTagString(video.phase)}
          </VideoListItemTag>}
          {video.element && <VideoListItemTag color={elementColor}
                            onClick={elementOnClick}>
            {formatTagString(video.element)}
          </VideoListItemTag>}
          {video.season && <VideoListItemTag color={seasonColor}
                            onClick={seasonOnClick}>
            {formatTagString(video.season)}
          </VideoListItemTag>}
          {video.organ && <VideoListItemTag color={organColor}
                            onClick={organOnClick}>
            {formatTagString(video.organ)}
          </VideoListItemTag>}
        </div>
        <div className={styles.videoCardInfo}>
          <p data-testid="video_card__short_description">{video.description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

