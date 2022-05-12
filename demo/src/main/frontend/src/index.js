import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App'
import LoginBox from './LoginBox';
import RegistrationBox from './RegistrationBox';

import { Routes, Route, BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

const emptyNewUser = {
  email: '',
  username: '',
  password: '',
  confirm_password: ''
}

const [newUser, setNewUser] = useState(emptyNewUser)

const handleRegister = console.log('Registered!')

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="login" element={<LoginBox />} />
      <Route
        path="register"
        element={<RegistrationBox
          newUser={newUser}
          setNewUser={setNewUser} // check
          handleRegister={handleRegister}
        />}
      />
      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>
);

