"use client";

import { useDispatch } from 'react-redux';

import { userSlice } from '@/store/reducers/user-reducer.slice';

import {logout} from "@/api/api";
import {useState} from "react";
import {AppDispatch} from "@/store/store";
import {useRouter} from "next/navigation";

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
      await logout().then(() => {
        dispatch(setUser(false));
        setIsLoggingOut(false);
        router.push('/');
      });
    } catch (error: any) {
      setIsLoggingOut(false);
      setLogoutError(error?.message);
    }
  };

  return { logoutFunc, isLoggingOut, logoutError };
};

