"use client";

import React, {PropsWithChildren} from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "@/store/store";
import {UserStateType} from "@/store/reducers/user-reducer.slice";
import {redirect} from "next/navigation";
import {useGetUserData} from "@/utils/hooks/useGetUserData";

const RequireAuth: React.FC<PropsWithChildren> = ({children}) => {
  const user = useSelector<AppRootStateType, UserStateType>(
    state => state.userState
  );

  const { isLoading} = useGetUserData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user.isAuthorized) {
    redirect('/login');
  }

  return (
    <>
      {children}
    </>
  );
};

export default RequireAuth;
