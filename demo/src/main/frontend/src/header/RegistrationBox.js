import React from 'react'

const RegistrationBox = () => {
  return (
    <main>
          <input
              name="email"
              id="email"
              type="email"
              placeholder="Your Email"
          />
          <input
              name="username"
              id="username"
              type="text"
              placeholder="Your Username"
          />
          <input
              name="password"
              id="password"
              type="password"
              placeholder="Your Password"
          />
          <input
              name="confirm_password"
              id="confirm_password"
              type="password"
              placeholder="Confirm Your Password"
          />
          <button>Register</button>
    </main>
  )
}

export default RegistrationBox