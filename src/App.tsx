import { createTheme, ThemeProvider, Theme } from '@mui/material/styles';
import { Layout } from 'common/components/Layout';
import { ProductCard } from 'common/components/ProductCard';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

const theme = createTheme({
  palette: {
    primary: {
      light: '#fff',
      contrastText: '#000000',
      main: '#1698d9',
      dark: '#002884',
    },
    secondary: {
      light: '#F2F2F2',
      contrastText: '#666666',
      main: '#11cb5f',
    },
  },
  spacing: 2,
  typography: {
    fontFamily: '"Trebuchet MS", "Arial", sans-serif, serif',
    h1: {
      fontSize: 48,
      fontWeight: 700,
    },
    h2: {
      fontSize: 36,
      fontFamily: "'Exo 2', sans-serif",
    },
    h3: {
      fontSize: 24,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: 22,
    },
  },
});

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Layout>
        <ProductCard filler="с фуа-гра" weight="0,5" />
        <ProductCard filler="с рыбой" weight={2} />
        <ProductCard filler="с курой" weight={5} />
      </Layout>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
