import logo from './logo.svg';
import './App.css';
import axios from "axios"
import Header from './header/Header';
import LoginBox from './LoginBox';
import RegistrationBox from './header/RegistrationBox';

function App() {
  return (
    <div>
      <Header />
      <LoginBox />
      <RegistrationBox />
    </div>
  );
}

export default App;
