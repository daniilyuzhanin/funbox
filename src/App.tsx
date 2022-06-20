import { createTheme, ThemeProvider, Theme } from '@mui/material/styles';
import { Layout } from 'common/components/Layout';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

const theme = createTheme({
  palette: {
    primary: {
      light: '#fff',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    // secondary: {
    //   main: '#11cb5f',
    // },
  },
  spacing: 2,
});

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
