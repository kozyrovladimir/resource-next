import React from 'react';
import {
  Paper,
  Table, TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import {VideoListItemI} from "@/shared/models";
import {
  defineElementColor, defineOrganColor,
  definePhaseColor,
  defineSeasonColor, formatTagString
} from "@/shared/lib/helpers";
import {useUpdateQueryString} from "@/utils/hooks/useUpdateQueryString";
import styles from './VideoTable.module.scss';

const TableRowItem: React.FC<{video: VideoListItemI}> = ({video}) => {

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
    <TableRow>
      <TableCell sx={{maxWidth: '420px'}}>
        {video.title}
      </TableCell>
      <TableCell sx={{color: phaseColor}} align="left">
          <span className={styles.tableText} onClick={phaseOnClick}>{video.phase && formatTagString(video.phase)}</span>
      </TableCell>
      <TableCell sx={{color: seasonColor}} align="left">
          <span className={styles.tableText} onClick={seasonOnClick}>{video.season && formatTagString(video.season)}</span>
      </TableCell>
      <TableCell sx={{color: elementColor}} align="left">
          <span className={styles.tableText} onClick={elementOnClick}>{video.element && formatTagString(video.element)}</span>
      </TableCell>
      <TableCell sx={{color: organColor}} align="left">
          <span className={styles.tableText} onClick={organOnClick}>{video.organ && formatTagString(video.organ)}</span>
      </TableCell>
    </TableRow>
  );
}

type VideoTableType = {
  videoList: VideoListItemI[];
}

const VideoTable: React.FC<VideoTableType> = ({videoList}) => {
  return (
    <TableContainer>
      <Table sx={{minWidth: 650}}>
        <TableHead sx={{backgroundColor: 'var(--color-main-grey-light)'}}>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Phase</TableCell>
            <TableCell align="left">Season</TableCell>
            <TableCell align="left">Element</TableCell>
            <TableCell align="left">Organ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {videoList.map((video) => (
            <TableRowItem video={video} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export {VideoTable};
