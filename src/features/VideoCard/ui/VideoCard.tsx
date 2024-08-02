import React, {useState} from 'react';
import styles from './VideoCard.module.scss';
import Link from "next/link";
import Image from "next/image";

import { defineElementColor, definePhaseColor } from '@/shared/lib/helpers';

import loader from '@/assets/images/805.svg';
// import { filtersType, useFilter } from 'utils/hooks/useFilter';

import {VideoListItemTag} from './VideoListItemTag';
import {VideoListItemI} from "@/shared/models";
import Box from "@mui/material/Box";

interface VideoListItemTypeProps {
  video: VideoListItemI;
}

const VideoCard: React.FC<VideoListItemTypeProps> = ({ video }) => {
  const phaseColor = definePhaseColor(video.phase);
  const elementColor = defineElementColor(video.element);

  // const onClickHandler = useNavigateToVideoPage(video);
  const onClickHandler = ()=> console.log(`move to video page ${video.id}`);

  // const filters: filtersType = {
  //   phase: video.phase,
  //   season: video.season,
  //   element: video.element,
  //   organ: video.organ,
  // };

  // const { filterPhase, filterElement } = useFilter(filters);

  // functionality for loader
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const onLoadHandler = (): void => {
    setIsLoaded(true);
  };

  return (
    // <StyledCard variant="outlined">
    //   <StyledCardActionArea sx={{ aspectRatio: '30 / 17' }}>
    //     {video.thumbnail !== '' && (
    //       <CardMedia
    //         sx={{
    //           aspectRatio: '4 / 3',
    //           opacity: isLoaded ? '100%' : '0',
    //           transition: '300ms',
    //         }}
    //         onClick={onClickHandler}
    //         component="img"
    //         onLoad={onLoadHandler}
    //         image={`https://yoqiresource.org/${video.thumbnail}`}
    //         alt="img"
    //       />
    //     )}
    //   </StyledCardActionArea>
    //   <CardContent sx={{ padding: 0 }}>
    //     <Typography sx={{ marginTop: '6px' }} variant="h6" component="div" noWrap={true}>
    //       {video.title}
    //     </Typography>
    //     <Box sx={{ flexGrow: 1, display: 'flex', marginTop: '4px' }}>
    //       {/*<VideoListItemTag color={phaseColor} onClick={filterPhase}>*/}
    //       <VideoListItemTag color={phaseColor} onClick={() => console.log('phase color: ', phaseColor)}>
    //         {video.phase}
    //       </VideoListItemTag>
    //       {/*<VideoListItemTag color={elementColor} onClick={filterElement}>*/}
    //       <VideoListItemTag color={elementColor} onClick={() => console.log('element color: ', phaseColor)}>
    //         {video.element}
    //       </VideoListItemTag>
    //     </Box>
    //     <Box>
    //       {/* TODO: make styles below locally */}
    //       <p className={styles.video_description}>{video.description}</p>
    //     </Box>
    //   </CardContent>
    // </StyledCard>

    <div data-testid="video_card" className={styles.videoCard}>
      <Link href={{
        pathname: '/',
      }}
            scroll={true}
      >
        <div className={styles.videoCardImage}>
          <Image fill={true} src={`https://yoqiresource.org/${video.thumbnail}`} alt="thumbnail" sizes={'100%'}/>
        </div>
      </Link>
      <div>
        <div className={styles.videoCardTitle}>
          <span data-testid="video_card__title">
            {video.title}
          </span>
        </div>
        <Box sx={{ flexGrow: 1, display: 'flex', marginTop: '4px' }}>
                 {/*<VideoListItemTag color={phaseColor} onClick={filterPhase}>*/}
                 <VideoListItemTag color={phaseColor} onClick={() => console.log('phase color: ', phaseColor)}>
                   {video.phase}
                 </VideoListItemTag>
                 {/*<VideoListItemTag color={elementColor} onClick={filterElement}>*/}
                 <VideoListItemTag color={elementColor} onClick={() => console.log('element color: ', phaseColor)}>
                   {video.element}
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

