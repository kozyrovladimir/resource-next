import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import * as api from '../../api/api';
import {UserDataI} from "../../models/UserData";
import {setUserData} from "../../store/reducers/user-data.slice";

export function useChangeMusicOption(userData: UserDataI) {

  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [withMusic, setWithMusic] = React.useState<boolean>(false);
  const [pending, setPending] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string | undefined>();
  const buttonIsDisabled = withMusic === userData.with_music || pending;

  // need to update withMusic state when userData changes
  useEffect(() => {
    setWithMusic(userData.with_music);
  }
    , [userData.with_music]);

  // clear error message when user closes the dialog
  useEffect(() => {
    if (!isOpen) {
      setErrorMessage(undefined);
    }
  }
    , [isOpen]);

  const handleOpen = (): void => {
    setIsOpen(true);
  };

  const handleClose = (): void => {
    setIsOpen(false);
  };

  const dispatch = useDispatch();

  const handleChangeMusicOption = () => {
    if (userData.with_music !== withMusic) {
      setPending(true);
      api.changeMusicOption(withMusic).then(() => {
        setWithMusic(withMusic);
        setPending(false);
          dispatch(
            setUserData({
              userData: {
                ...userData,
                with_music: withMusic,
              },
            }),
          );
        handleClose();
      }
      ).catch((error) => {
        setErrorMessage(error.message);
        setPending(false);
      })
    }
  };

  return {isOpen, withMusic, setWithMusic, pending, buttonIsDisabled, errorMessage, handleOpen, handleClose, handleChangeMusicOption};
}
