import logo from './logo.svg';
import './App.css';
import axios from "axios"
import Header from './header/Header';
import LoginBox from './LoginBox';

function App() {
  return (
    <div>
      <Header />
      <LoginBox />
    </div>
  );
}

export default App;
