import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppRootStateType } from '../../store/store';
import { SubscriptionStatusAPII } from '../../store/reducers/subscription-status.slice';
import { fetchSubscriptionStatus } from '../../store/actionCreators/fetchSubscriptionStatus';

export const useFetchSubscriptionStatus = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { subscriptionStatus, isLoading, error } = useSelector<AppRootStateType, SubscriptionStatusAPII>(
    state => state.subscriptionStatus,
  );

  useEffect(() => {
    void dispatch(fetchSubscriptionStatus());
  }, []);

  // Memoize the object to prevent unnecessary rerender of components
  const subscriptionStatusData = useMemo(() => ({
    isLoading,
    error,
    subscriptionStatus,
  }), [isLoading, error, subscriptionStatus]);

  return subscriptionStatusData;
};
