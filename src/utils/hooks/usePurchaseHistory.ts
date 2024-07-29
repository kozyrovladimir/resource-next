import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {AppDispatch, AppRootStateType} from "../../store/store";
import {PurchaseHistoryAPII} from "../../store/reducers/purchase_history.slice";
import {fetchPurchaseHistory} from "../../store/actionCreators/fetchPurchaseHistory";

export const usePurchaseHistory = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {purchaseHistory , isLoading, error } = useSelector<
    AppRootStateType,
    PurchaseHistoryAPII
  >(state => state.purchaseHistory);

  useEffect(() => {
    dispatch(fetchPurchaseHistory());
  }, [dispatch]);

  return { purchaseHistory: purchaseHistory, isLoading, error };
};
