import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';

import { Routes, Route, BrowserRouter } from 'react-router-dom'
import RedirectAftRegistration from './registration/RedirectAftRegistration';
import { AuthProvider } from './login/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/redirect" element={<RedirectAftRegistration />} />
      <Route path="*" element={
        <AuthProvider>
          <App />
        </AuthProvider>
      } />
    </Routes>
  </BrowserRouter>
);

