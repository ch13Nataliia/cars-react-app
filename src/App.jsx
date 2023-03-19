import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import CssBaseline from '@mui/material/CssBaseline';

import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Add from './pages/Add';
import ListCars from './pages/ListCars';
import Update from './pages/Update';
import NotFound from './pages/NotFound';

import { CarsProvider } from './components/context/car.context';
import { UIProvider } from './components/context/UI.context';
function App() {
  return (
    <Router>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <UIProvider>
          <CarsProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<ListCars />} />
                <Route path="/add" element={<Add />} />
                <Route path="/update/:id" element={<Update />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </CarsProvider>
        </UIProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
