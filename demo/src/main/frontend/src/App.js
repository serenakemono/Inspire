import './common/assets/App.css';

import Header from './header/Header';
import Missing from './common/Missing';
import HomePage from './home/HomePage';

import React, { useState, useEffect, Component } from 'react';
import { Route, Routes, useHistory } from 'react-router-dom';
import ProfilePage from './profile/ProfilePage';
import AuthService from './authentication/AuthService';
import LogoutPage from './sign_in_sign_up/LogoutPage';
import TagPage from './tag_display/TagPage';

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
          href: "/feed"
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
          
        
          <Route exact path="feed" element={<HomePage />} />
          <Route path={"feed/hashtag/:tagname"} element={<TagPage />} />
          
          <Route path="me" element={<ProfilePage />} />
          <Route path="logout" element={<LogoutPage />} />
          {/* <Route path="getinspired" element={<GetInspired />} />
          <Route path="community" element={<Community />} />
          <Route path="courses" element={<Courses />} />
          <Route path="messaging" element={<Messaging />} /> */}
          <Route path="*" element={<Missing />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
