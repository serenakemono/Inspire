import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import LoginForm from './LoginForm';
import RegistrationForm from './registration/RegistrationForm';

import { Routes, Route, BrowserRouter } from 'react-router-dom'
import RedirectAftRegistration from './registration/RedirectAftRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/redirect" element={<RedirectAftRegistration />} />
      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>
);

