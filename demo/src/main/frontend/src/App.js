import logo from './logo.svg';
import './App.css';
import axios from "axios"

import Header from './header/Header';
import LoginBox from './LoginBox';
import RegistrationBox from './header/RegistrationBox';
import Missing from './Missing';
import Footer from './Footer'
import Home from './home/Home'
import PostPage from './home/PostPage';

import { useState, useEffect } from 'react';
import { Route, Routes, useHistory } from 'react-router-dom';

function App() {
  const [newUser, setNewUser] = useState('')

  const handleRegister = () => {
    console.log("Registered.")
  }

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "my first post",
      datetime: "May 11, 2022 08:04:36 PM",
      body: "dfjadsogo lkdhflaer  djhoasd fdslkfjoasp fdlufpoa   fladsfsdlnosdue lfdsufopasdbn ioenfdjkwe fldshfhnf lsadhfop s."
    },
    {
      id: 2,
      title: "my second post",
      datetime: "May 22, 2022 05:23:11 PM",
      body: "today ld ldfjne9r ldjpe flksdaf pwejn,v asdoifsuaoplk eopiru pwe."
    }
  ])

  return (
    <div>
      <Header />
      <Routes>
        <Route path="home" element={<Home posts={posts} />} />
        <Route path="post/:id" element={<PostPage posts={posts} />} />
        {/* <Route path="getinspired" element={<GetInspired />} />
        <Route path="community" element={<Community />} />
        <Route path="courses" element={<Courses />} />
        <Route path="messaging" element={<Messaging />} />
        <Route path="me" element={<Me />} /> */}
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
