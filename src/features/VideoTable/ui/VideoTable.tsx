import React from 'react';
import {
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
import Link from "next/link";

const TableRowItem: React.FC<{ video: VideoListItemI }> = ({video}) => {

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
        <Link href={`/video/${video.id}`} style={{color: '#222'}} className={styles.tableText}>
        {video.title}
          </Link>
      </TableCell>
      <TableCell sx={{color: phaseColor}} align="left">
        <span className={styles.tableText}
              onClick={phaseOnClick}>{video.phase && formatTagString(video.phase)}</span>
      </TableCell>
      <TableCell sx={{color: seasonColor}} align="left">
        <span className={styles.tableText}
              onClick={seasonOnClick}>{video.season && formatTagString(video.season)}</span>
      </TableCell>
      <TableCell sx={{color: elementColor}} align="left">
        <span className={styles.tableText}
              onClick={elementOnClick}>{video.element && formatTagString(video.element)}</span>
      </TableCell>
      <TableCell sx={{color: organColor}} align="left">
        <span className={styles.tableText}
              onClick={organOnClick}>{video.organ && formatTagString(video.organ)}</span>
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
            <TableCell sx={{color: '#666'}}
                       className={styles.tableHeadText}>Name</TableCell>
            <TableCell sx={{color: '#666'}} align="left">Phase</TableCell>
            <TableCell sx={{color: '#666'}} align="left">Season</TableCell>
            <TableCell sx={{color: '#666'}} align="left">Element</TableCell>
            <TableCell sx={{color: '#666'}} align="left">Organ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {videoList.map((video) => (
            <TableRowItem video={video}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export {VideoTable};
