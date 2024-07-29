import { useState } from 'react';

import { axiosErrorHandler } from '../helpers/axiosErrorHandler';

import * as api from '../../api/api';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { fetchSubscriptionStatus } from '../../store/actionCreators/fetchSubscriptionStatus';

interface IUseCancelSubscription {
  pending: boolean;
  cancelingError: string;
  cancelSubscription: () => Promise<void>;
}

export const useCancelSubscription = (): IUseCancelSubscription => {
  const dispatch = useDispatch<AppDispatch>();

  const [pending, setPending] = useState<boolean>(false);
  const [cancelingError, setCancelingError] = useState<string>('');

  const cancelSubscription = async (): Promise<void> => {
    try {
      setPending(true);
      await api.cancelSubscription();
      void dispatch(fetchSubscriptionStatus());
    } catch (e) {
      setCancelingError(axiosErrorHandler(e));
    } finally {
      setPending(false);
    }
  };

  return { pending, cancelingError, cancelSubscription };
};

