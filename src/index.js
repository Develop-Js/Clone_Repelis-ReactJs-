import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/*imports css*/
import './assets/scss/_main.scss';
import './assets/scss/normalize.scss'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
