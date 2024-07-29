// eslint-disable-next-line import/named
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import * as api from '../../api/api';

export interface UserStateType {
  isLoading: boolean;
  error: string | undefined;
  isAuthorized: boolean;
  subscriptionStatus: string;
}

// const accessToken = localStorage.getItem('token');
// const isAuthorized = accessToken !== null;

const initialUserState: UserStateType = {
  isLoading: false,
  error: '',
  isAuthorized: false,
  subscriptionStatus: '',
};

export const fetchUser = createAsyncThunk<boolean, undefined, { rejectValue: string }>(
  'user/fetchUser',
  async function (_, { dispatch, rejectWithValue }) {
    try {
      const response = await api.getUserData();
      const authorized = response.headers.authorized;

      return authorized !== 'false';
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue('Unknown error');
      }
    }
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUser(state = initialUserState, action: PayloadAction<boolean>) {
      state.isAuthorized = action.payload;
    },
    setSubscriptionStatus(state = initialUserState, action: PayloadAction<string>) {
      state.subscriptionStatus = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isAuthorized = action.payload;
      state.isLoading = false;
      state.error = undefined;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchUser.pending, state => {
      state.isLoading = true;
      state.error = undefined;
    });
  },
});

export default userSlice.reducer;
