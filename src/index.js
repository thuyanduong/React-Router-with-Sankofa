import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import ContextProvider from './components/Context/ContextProvider';

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById('root')
);
