import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { GlobalStyle } from './styles/globals';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </div>
  );
}

export default App;
