import { useSelector } from 'react-redux';

import { UserDataAPII } from '@/store/reducers/user-data.slice';
import { AppRootStateType } from '@/store/store';

export const useGetUserData= (): UserDataAPII => {
  const { userData, isLoading, error } = useSelector<AppRootStateType, UserDataAPII>(
    state => state.userData,
  );

  return { userData, isLoading, error };
};
