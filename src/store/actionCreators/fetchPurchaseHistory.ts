import {createAsyncThunk} from "@reduxjs/toolkit";
import {PurchaseHistoryItem} from "@/models/PurchaseHistory";
import {userSlice} from "../reducers/user-reducer.slice";
import {api} from '@/shared';
import {axiosErrorHandler} from "@/utils/helpers/axiosErrorHandler";

export const fetchPurchaseHistory = createAsyncThunk<
  PurchaseHistoryItem[],
  undefined,
  {rejectValue: string}
>
(
  'purchaseHistory/fetchPurchaseHistory',
  async function (_, {dispatch ,rejectWithValue}) {
    const { setUser } = userSlice.actions;

    try {
      const response = await api.getPurchaseHistory();
      const purchaseInformation = response.data;
      const authorized = response.headers.authorized;

      if (authorized === 'false') {
        dispatch(setUser(false));
      } else {
        dispatch(setUser(true));
      }

      return purchaseInformation;

    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  },
);
