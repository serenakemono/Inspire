import './common/assets/App.css';

import Header from './header/Header';
import Missing from './common/Missing';
import HomePage from './home/HomePage';
import CommunityPage from './community/CommunityPage';

import React, { useState, useEffect, Component } from 'react';
import { Route, Routes, useHistory } from 'react-router-dom';
import SelfProfilePage from './profile/profile_pages/SelfProfilePage';
import OtherProfilePage from './profile/profile_pages/OtherProfilePage';
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
          label: "Home",
          href: "/feed"
      },
      {
          label: "Get Inspired",
          href: "/getinspired"
      },
      {
          label: "Community",
          href: "/community"
      },
      {
          label: "Messages",
          href: "/messages"
      },
      {
          label: "Courses",
          href: "/courses"
      }
    ];
    
    if (currUser) {
      headerItems.push({ label: "Me", href: "/me" });
      headerItems.push({ label: "Log out", href: "/logout" });
    } else {
      headerItems.push({ label: "Login/Register", href: "/login" });
    }

    return (
      <div>
        <Header headerItems={headerItems} />
        <Routes>
          <Route exact path="feed" element={<HomePage />} />
          <Route path={"feed/hashtag/:tagname"} element={<TagPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="me" element={<SelfProfilePage />} />
          <Route path={"user/:username"} element={<OtherProfilePage />} />
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
