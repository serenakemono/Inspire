import React from 'react'
import AuthService from '../authentication/AuthService'

const LogoutPage = () => {
    AuthService.logout();
    window.location.href = '/Login';
  return (
    <div style={{marginTop: "80px"}}>You have been logged out. Going back to the login page now...</div>
  )
}

export default LogoutPage