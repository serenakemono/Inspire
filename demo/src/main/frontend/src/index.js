import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import LoginBox from './LoginBox';
import RegistrationBox from './RegistrationForm';

import { Routes, Route, BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="login" element={<LoginBox />} />
      <Route
        path="register"
        element={<RegistrationBox />}
      />
      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>
);

