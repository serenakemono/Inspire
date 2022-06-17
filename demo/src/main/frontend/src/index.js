import React from 'react';
import ReactDOM from 'react-dom/client';
import './common/assets/index.css';

import App from './App';

import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './authentication/AuthProvider';
import SignInUpPage from './sign_in_sign_up/SignInUpPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="login" element={<SignInUpPage />} />
      <Route path="*" element={
        <AuthProvider>
          <App />
        </AuthProvider>
      } />
    </Routes>
  </BrowserRouter>
);

