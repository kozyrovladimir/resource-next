import { useSelector } from 'react-redux';

import { UserStateType } from '@/store/reducers/user-reducer.slice';
import { AppRootStateType } from '@/store/store';

export const useIsAuthorised = (): boolean => {
  const user = useSelector<AppRootStateType, UserStateType>(state => state.userState);

  return user.isAuthorized;
};

export const useSubscriptionStatus = (): string => {
  const user = useSelector<AppRootStateType, UserStateType>(state => state.userState);

  return user.subscriptionStatus;
};
