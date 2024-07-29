import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchUserData } from '../../store/actionCreators/fetchUserData';
import { UserDataAPII } from '../../store/reducers/user-data.slice';
import { AppDispatch, AppRootStateType } from '../../store/store';

export const useFetchUserData = (): UserDataAPII => {
  const { userData, isLoading, error } = useSelector<AppRootStateType, UserDataAPII>(
    state => state.userData,
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (userData.id === '') {
      void dispatch(fetchUserData());
    }
  }, [dispatch, userData.id]);

  return { userData, isLoading, error };
};
