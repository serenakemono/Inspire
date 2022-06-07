import React from 'react'
import AuthService from '../authentication/AuthService'

const LogoutPage = () => {
    AuthService.logout();
    window.location.href = '/Login';
  return (
    <div style={{
      display: "flex",
      marginTop: "80px",
      marginLeft: "15px"
    }}>
      You have been logged out. Going back to the login page now...
    </div>
  )
}

export default LogoutPage