/* eslint-disable prettier/prettier */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import {theme} from './component/Homepage/Theme'
// import { ThemeProvider } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ThemeProvider> */}
      <App />
    {/* </ThemeProvider> */}
  </React.StrictMode>
);
