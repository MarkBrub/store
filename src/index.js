import './index.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { App } from './app/App';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);