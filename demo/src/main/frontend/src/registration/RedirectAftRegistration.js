import React from 'react'
import { Link } from 'react-router-dom'

const RedirectAftRegistration = () => {
  return (
    <div>
      <p>You have successfully registered for an account.</p>
      <Link to='/login'>Redirect to Login Page here</Link>
    </div>
  )
}

export default RedirectAftRegistration