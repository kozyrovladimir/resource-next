import {useEffect, useMemo, useState} from 'react';
import {newPurchase} from "@/api/api";
import {axiosErrorHandler} from "../helpers/axiosErrorHandler";
import {PurchaseInfo} from "@/models/PurchaseInfo";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/store/store";
import {fetchUserData} from "@/store/actionCreators/fetchUserData";
import {clearSuccessPayment} from "@/store/reducers/success-payment.slice";
import _ from "lodash";

export const useSuccessPayment = (purchaseInfo: PurchaseInfo) => {

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch<AppDispatch>();

  const isPurchaseInfoEmpty = _.isEmpty(purchaseInfo);

  useEffect(() => {
    const fetchData = async () => {
      // Проверка на наличие purchaseInfo перед вызовом newPurchase
      if (isPurchaseInfoEmpty) {
        setIsLoading(false);
        return;
      }

      try {
        await newPurchase(purchaseInfo);
        setIsLoading(false);
        dispatch(fetchUserData());
        dispatch(clearSuccessPayment());
      } catch (error) {
        // @ts-ignore
        setError(axiosErrorHandler(error));
        setIsLoading(false);
      }
    };

    void fetchData();
  }, [purchaseInfo]);  // так как purchaseInfo теперь участвует в useEffect, его нужно добавить в зависимости

  return useMemo(() => {
    return {isLoading, error};
  }, [isLoading, error]);
};
