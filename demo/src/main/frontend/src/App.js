import logo from './logo.svg';
import './App.css';
import axios from "axios"
import Header from './header/Header';
import LoginBox from './LoginBox';
import RegistrationBox from './header/RegistrationBox';
import { useState } from 'react';

function App() {
  const [newUser, setNewUser] = useState('')

  const handleRegister = () => {
    console.log("Registered.")
  }

  return (
    <div>
      <Header />
      <LoginBox />
      <RegistrationBox
        newUser={newUser}
        setNewUser={setNewUser}
        handleRegister={handleRegister}
      />
    </div>
  );
}

export default App;
