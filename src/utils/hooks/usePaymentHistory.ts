import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {AppDispatch, AppRootStateType} from "../../store/store";
import {PaymentHistoryAPII} from "../../store/reducers/payment-history.slice";
import {fetchPaymentHistory} from "../../store/actionCreators/fetchPaymentHistory";

export const usePaymentHistory = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { paymentHistory, isLoading, error } = useSelector<
    AppRootStateType,
    PaymentHistoryAPII
  >(state => state.paymentHistory);

  useEffect(() => {
    dispatch(fetchPaymentHistory());
  }, [dispatch]);

  return { paymentHistory, isLoading, error };
};
