import {useState} from "react";
import {addFavorite, deleteFavorite} from "@/api/api";
import {deleteFavoriteVideoListAPI} from "@/store/reducers/favorite-video-list.slice";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/store/store";
import {usePathname, useRouter} from "next/navigation";

// this hook has different implementation from the VOD app
export const useHandleFavourites = (id: number, initialIsFavourite: boolean) => {
  const [isFavourite, setIsFavourite] = useState(initialIsFavourite);
  const [pending, setPending] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // additional logic
  const dispatch = useDispatch<AppDispatch>();
  // const path = useLocation();


  const path = usePathname();
  const router = useRouter();

  // ------------------------------

  const handleFavourite = () => {
    setPending(true);
    if (isFavourite) {
      deleteFavorite(id)
        .then(() => {
          setIsFavourite(false);
          // additional logic
          if (path.includes('favourites')) {
            dispatch(deleteFavoriteVideoListAPI({videoId: id}));
            router.push(`/videos/favourites`)
          }
          // ------------------------------
          setPending(false);
        })
        .catch((e) => {
          setError(e.message);
          setPending(false);
        });
    } else {
      addFavorite(id)
        .then(() => {
          setIsFavourite(true);
          setPending(false);
        })
        .catch((e) => {
          setError(e.message);
          setPending(false);
        });
    }
  }

  return {isFavourite, pending, error, handleFavourite};
}
