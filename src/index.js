import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components';
import dark from './Styles/dark';
import Global from './Styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={ dark }>
    <Global />
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
