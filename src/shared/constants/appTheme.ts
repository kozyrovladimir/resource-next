"use client";

import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    success: {
      main: '#FFD700',
    },
    primary: {
      main: '#FFD700',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 960,
      lg: 1280,
      xl: 1536,
    }
  },
});
