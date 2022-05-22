import logo from './logo.svg';
import './App.css';

import Header from './header/Header';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import Missing from './Missing';
import Footer from './Footer'
import PostsDisplay from './home/PostsDisplay'
import PostPage from './home/PostPage';

import React, { useState, useEffect } from 'react';
import { Route, Routes, useHistory } from 'react-router-dom';
import Profile from './profile/Profile';

// red: #e51b23
// pink: #f8c6c8

function App() {
  // refresh at load time only by using []
  // handles GET request for 'register'
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       // axios automatically takes care of response
  //       const response = await registerApi.get('');
        
  //     } catch {
  //       if (err.response) {
  //         console.log(err.response.data);
  //         console.log(err.response.status);
  //         console.log(err.response.headers);
  //       } else {
  //         console.log(`Error: ${err.message}`)
  //       }
  //       // Not in the 200 response range
  //     }
  //   }
  // }, [])

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
        <Route path="login" element={<LoginForm />} />
        <Route
          path="register"
          element={<RegistrationForm />}
        />
      
        <Route path="home" element={<PostsDisplay posts={posts} />} />
        <Route path="post/:id" element={<PostPage posts={posts} />} />
        <Route path="me" element={<Profile posts={posts} />} />
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
