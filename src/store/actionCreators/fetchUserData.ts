import { createAsyncThunk } from '@reduxjs/toolkit';

import { userSlice } from '../reducers/user-reducer.slice';

import {api} from '@/shared';
import { UserDataI } from '@/models/UserData';
import { axiosErrorHandler } from '@/utils/helpers/axiosErrorHandler';

export const fetchUserData = createAsyncThunk<
  UserDataI,
  undefined,
  { rejectValue: string }
>('userData/fetchUserData', async function (_, { dispatch, rejectWithValue }) {
  const { setUser } = userSlice.actions;

  try {
    const response = await api.getUserData();
    const userData = response.data;
    const authorized = response.headers.authorized;

    if (authorized === 'false') {
      dispatch(setUser(false));
    } else {
      dispatch(setUser(true));
    }

    return userData;
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
});
