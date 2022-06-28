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
      main: '#1698d9',
      dark: '#2EA8E6',
      light: '#fff',
      contrastText: '#000000',
    },
    secondary: {
      light: '#F2F2F2',
      contrastText: '#666666',
      main: '#D91667',
      dark: '#E52E7A',
    },
  },
  spacing: 2,
  typography: {
    fontFamily: '"Trebuchet MS", "Arial", sans-serif, serif',
    h1: {
      fontSize: 48,
      fontWeight: 700,
      ineHeight: '56px',
    },
    h2: {
      fontSize: 36,
      fontFamily: "'Exo 2', sans-serif",
    },
    h3: {
      fontSize: 24,
      fontWeight: 700,
      ineHeight: '28px',
    },
    subtitle1: {
      fontSize: 22,
    },
    subtitle2: {
      fontSize: 13,
      lineHeight: '15px',
    },
    body2: {
      fontSize: 14,
      lineHeight: '16px',
    },
  },
});

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Layout>
        <ProductCard filler="с фуа-гра" weight="0,5" count={10} description="Печень утки разварная с артишоками." />
        <ProductCard filler="с рыбой" weight={2} count={40} description="Головы щучьи с чесноком да свежайшая сёмгушка." />
        <ProductCard filler="с курой" weight={5} count={100} description="Филе из цыплят с трюфелями в бульоне." />
      </Layout>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
