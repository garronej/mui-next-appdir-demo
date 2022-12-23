'use client';

import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green } from "@mui/material/colors";

const innerTheme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});

export default function AppThemeProvider(props: { children: React.ReactNode }) {
  const { children } = props;
  return <ThemeProvider theme={innerTheme}>{children}</ThemeProvider>;
}
