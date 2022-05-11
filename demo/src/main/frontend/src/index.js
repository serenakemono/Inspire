import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import Header from './header/Header';
import LoginBox from './LoginBox';
import RegistrationBox from './header/RegistrationBox';
import Missing from './Missing';
import Footer from './Footer'
import Explore from './Explore'

import { Routes, Route, BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>
);

