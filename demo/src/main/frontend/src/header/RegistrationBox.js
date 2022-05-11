import React from 'react'

const RegistrationBox = ({newUser, setNewUser, handleRegister}) => {
  return (
    <form>
          <input
              name="email"
              id="email"
              type="email"
              placeholder="Your Email"
              required
              value={newUser}
              onChange={(e) => set}
          />
          <input
              name="username"
              id="username"
              type="text"
              placeholder="Your Username"
              required
          />
          <input
              name="password"
              id="password"
              type="password"
              placeholder="Your Password"
              required
          />
          <input
              name="confirm_password"
              id="confirm_password"
              type="password"
              placeholder="Confirm Your Password"
              required
          />
          <button>Register</button>
    </form>
  )
}

export default RegistrationBox