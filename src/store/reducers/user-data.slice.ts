// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchUserData } from '../actionCreators/fetchUserData';

import { UserDataI } from '../../models/UserData';

export interface UserDataAPII {
  isLoading: boolean;
  error: string | undefined;
  userData: UserDataI;
}

const initialUserDataState: UserDataAPII = {
  isLoading: false,
  error: '',
  userData: {
    id: '',
    email: '',
    name: '',
    status: '',
    with_music: true,
  },
};

export const userDataSlice = createSlice({
  name: 'userData',
  initialState: initialUserDataState,
  reducers: {
    setUserData(
      state = initialUserDataState,
      action: PayloadAction<{ userData: UserDataI }>,
    ) {
      state.userData = action.payload.userData;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.userData = action.payload;
      state.isLoading = false;
      state.error = undefined;
    });
    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchUserData.pending, state => {
      state.isLoading = true;
      state.error = undefined;
    });
  },
});

export const { setUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
