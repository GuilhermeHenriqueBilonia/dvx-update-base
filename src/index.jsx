import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

ReactDOM.render(
    <BrowserRouter>
      <App />
      <ReactNotification />
    </BrowserRouter>,
  document.getElementById('root')
);
