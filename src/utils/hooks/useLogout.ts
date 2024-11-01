"use client";

import { useDispatch } from 'react-redux';

import { userSlice } from '@/store/reducers/user-reducer.slice';

import {api} from '@/shared';
import {useState} from "react";
import {AppDispatch} from "@/store/store";
import {useRouter} from "next/navigation";
import {cookies} from "next/headers";

export const useLogout = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [logoutError, setLogoutError] = useState<any | null>(null);

  const router = useRouter();

  const { setUser } = userSlice.actions;
  const dispatch = useDispatch<AppDispatch>();

  const logoutFunc = async () => {
    try {
      setIsLoggingOut(true);
      setLogoutError(null);
      // Выполняем POST-запрос на сервер для выхода пользователя.
      await api.logout().then(() => {
        // temporary solution for delete token from local storage
        localStorage.removeItem('token');
        dispatch(setUser(false));
      });
    } catch (error: any) {
      setIsLoggingOut(false);
      setLogoutError(error?.message);
    } finally {
      router.push('/');
    }
  };

  return { logoutFunc, isLoggingOut, logoutError };
};

