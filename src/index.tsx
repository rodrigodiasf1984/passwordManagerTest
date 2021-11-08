import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import theme from 'theme';
import { CircularProgress, ThemeProvider } from '@mui/material';
import App from './App';
import * as serviceWorker from './serviceWorker.js';

import './i18n';

ReactDOM.render(
  <Suspense fallback={<CircularProgress color="secondary" />}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    ,
  </Suspense>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
