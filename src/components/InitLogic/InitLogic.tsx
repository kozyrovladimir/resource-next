"use client";

import {useFetchUserData} from "@/utils/hooks/useFetchUserData";
import {useEffect} from "react";

const InitLogic = () => {

  // get email and name from url params and save them to cookies
  useEffect(() => {
    const searchParamsString = window.location.search;

    const urlParams = new URLSearchParams(searchParamsString);

    const email = urlParams.get('reg_email');
    const name = urlParams.get('reg_name');

    if (email && name) {
      document.cookie = `email=${email};`;
      document.cookie = `name=${name};`;
    }
  }, []);

  useFetchUserData();

  return null;
};

export default InitLogic;
