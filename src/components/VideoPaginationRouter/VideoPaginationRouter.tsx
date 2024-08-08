import React from 'react';

import { Pagination, Container } from '@mui/material';
import {useUpdateQueryString} from "@/utils/hooks/useUpdateQueryString";

interface VideoPaginationRouterPropsType {
  numPages: number;
  page: number;
}

const VideoPaginationRouter: React.FC<VideoPaginationRouterPropsType> = ({
  page,
  numPages,
}) => {

  const updateQueryString = useUpdateQueryString();

  const handleChangeTileView = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ): void => {
    updateQueryString('page', value.toString());
  };

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', pt: 2, pb: 2 }}>
      <Pagination variant={'text'} count={numPages} page={page} onChange={handleChangeTileView} />
    </Container>
  );
};

export default VideoPaginationRouter;
