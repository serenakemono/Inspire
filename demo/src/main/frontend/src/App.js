import logo from './logo.svg';
import './App.css';
import axios from "axios"

import Header from './header/Header';
import LoginBox from './LoginBox';
import RegistrationBox from './header/RegistrationBox';
import Missing from './Missing';
import Footer from './Footer'
import Explore from './Explore'

import { useState, useEffect } from 'react';
import { Route, Routes, useHistory } from 'react-router-dom';

function App() {
  const [newUser, setNewUser] = useState('')

  const handleRegister = () => {
    console.log("Registered.")
  }

  return (
    <div>
      <Header />
      <Routes>
        {/* <Route 
          path="register"
          element={
            <RegistrationBox
              newUser={newUser}
              setNewUser={setNewUser}
              handleRegister={handleRegister}
            />
          }
        /> */}
        <Route path="Explore" element={<Explore />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
