import logo from './logo.svg';
import './App.css';

import Header from './header/Header';
import SignInUpPage from './sign_in_sign_up/SignInUpPage';
import Missing from './Missing';
import Footer from './Footer'
import HomePage from './home/HomePage';

import React, { useState, useEffect, Component } from 'react';
import { Route, Routes, useHistory } from 'react-router-dom';
import ProfilePage from './profile/ProfilePage';
import AuthService from './authentication/AuthService';
import LogoutPage from './login/LogoutPage';

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

    const headerItems = [
      {
          label: "home",
          href: "/home"
      },
      {
          label: "getinspired",
          href: "/getinspired"
      },
      {
          label: "community",
          href: "/community"
      },
      {
          label: "messages",
          href: "/messages"
      },
      {
          label: "courses",
          href: "/courses"
      }
    ];
    
    if (currUser) {
      headerItems.push({ label: "Me", href: "/me" });
      headerItems.push({ label: "log out", href: "/logout" });
    } else {
      headerItems.push({ label: "login/register", href: "/login" });
    }

    return (
      <div>
        <Header headerItems={headerItems} />
        <Routes>
          
        
          <Route path="home" element={<HomePage />} />
          {/* <Route path="post/:id" element={<PostPage posts={posts} />} /> */}
          {/* <Route path="me" element={<Profile posts={posts} />} /> */}
          <Route path="me" element={<ProfilePage />} />
          <Route path='logout' element={<LogoutPage />} />
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
