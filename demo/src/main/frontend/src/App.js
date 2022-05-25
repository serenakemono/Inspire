import logo from './logo.svg';
import './App.css';

import Header from './header/Header';
import LoginForm from './login/LoginForm';
import RegistrationForm from './registration/RegistrationForm';
import Missing from './Missing';
import Footer from './Footer'
import PostsDisplay from './home/PostsDisplay'
import PostPage from './home/PostPage';

import React, { useState, useEffect, Component } from 'react';
import { Route, Routes, useHistory } from 'react-router-dom';
import ProfilePage from './profile/ProfilePage';
import AuthService from './authentication/AuthService';

// red: #e51b23
// pink: #f8c6c8

class App extends Component {

  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currUser: undefined
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrUser();

    if (user) {
      this.setState({
        currUser: AuthService.getCurrUser(),
      })
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {

    const { currUser } = this.state;

    return (
      <div>
        <Header />
        <Routes>
          <Route path="login" element={<LoginForm />} />
          <Route
            path="register"
            element={<RegistrationForm />}
          />
        
          {/* <Route path="home" element={<PostsDisplay posts={posts} />} />
          <Route path="post/:id" element={<PostPage posts={posts} />} /> */}
          {/* <Route path="me" element={<Profile posts={posts} />} /> */}
          <Route path="me" element={<ProfilePage />} />
          {/* <Route path="getinspired" element={<GetInspired />} />
          <Route path="community" element={<Community />} />
          <Route path="courses" element={<Courses />} />
          <Route path="messaging" element={<Messaging />} />
          <Route path="me" element={<Me />} /> */}
          <Route path="*" element={<Missing />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
