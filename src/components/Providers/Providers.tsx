"use client";

import React, {PropsWithChildren} from 'react';
import {store} from "@/store/store";
import {Provider} from "react-redux";
import {theme} from "@/shared";
import {ThemeProvider} from "@mui/material";

const Providers: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      {children}
      </ThemeProvider>
    </Provider>
  );
};

export default Providers;
