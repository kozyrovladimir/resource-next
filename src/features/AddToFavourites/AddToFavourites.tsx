"use client";

import React from 'react';
import {useHandleFavourites} from "@/utils/hooks/useHandleFavourites";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {CircularProgress, Stack} from "@mui/material";
import styles from './AddToFavourites.module.scss';

interface AddToFavouritesProps {
  id: number;
  isFavouriteInitial: boolean;
}

const AddToFavourites: React.FC<AddToFavouritesProps> = ({id, isFavouriteInitial}) => {
  const {
    isFavourite,
    handleFavourite,
    pending,
    error
  } = useHandleFavourites(id, isFavouriteInitial);

  return (
    <button onClick={handleFavourite}
            style={{
              backgroundColor: 'inherit', cursor: 'pointer', display: "block" //fix bug with button height
            }}
            disabled={pending}>
      <Stack mt={1} gap={0.5} direction={'row'} alignItems={'center'}>
        <div style={{width: '22px', height: '22px'}}>
          {isFavourite && !pending ? (<FavoriteIcon fontSize={'small'}
                                                    sx={{color: 'red'}}/>) : !isFavourite && !pending ? (
              <FavoriteBorderIcon fontSize={'small'} sx={{color: 'red'}}/>) :
            <CircularProgress size={18}/>}
        </div>
        <p className={styles.text}>{
          isFavourite ? 'Favourite' : 'Add to your favourite videos'
        }</p>
      </Stack>
    </button>
  );
};

export default AddToFavourites;
