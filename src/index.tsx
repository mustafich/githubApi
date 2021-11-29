import React from 'react';
import ReactDOM from 'react-dom';
import "libs/bootstrap-grid/bootstrap-grid.css"
import "libs/rest/reset.css"
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store"
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
