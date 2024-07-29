import {PurchaseHistoryItem} from "../../models/PurchaseHistory";
import {fetchPurchaseHistory} from "../actionCreators/fetchPurchaseHistory";
import {createSlice} from "@reduxjs/toolkit";

export interface PurchaseHistoryAPII {
  purchaseHistory: PurchaseHistoryItem[];
  isLoading: boolean;
  error: string | undefined;
}

const initialPurchaseInformationState: PurchaseHistoryAPII = {
  purchaseHistory: [] as PurchaseHistoryItem[],
  isLoading: false,
  error: '',
};

export const purchaseHistorySlice = createSlice({
  name: 'purchaseHistory',
  initialState: initialPurchaseInformationState,
  reducers: {
    setPurchaseInformation(state, action) {
      state.purchaseHistory = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPurchaseHistory.fulfilled, (state, action) => {
      state.purchaseHistory = action.payload;
      state.isLoading = false;
      state.error = undefined;
    });
    builder.addCase(fetchPurchaseHistory.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchPurchaseHistory.pending, state => {
      state.isLoading = true;
      state.error = undefined;
    });
  },
});

export default purchaseHistorySlice.reducer;
