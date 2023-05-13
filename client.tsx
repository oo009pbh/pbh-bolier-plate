import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import { MainPageRoutes } from './router';

axios.defaults.withCredentials = true;
axios.defaults.baseURL =
  process.env.NODE_ENV === 'production' ? 'https://13.209.22.23' : 'http://localhost:3090';

render(
  <BrowserRouter>
    <MainPageRoutes />
  </BrowserRouter>,
  document.querySelector('#app'),
);
