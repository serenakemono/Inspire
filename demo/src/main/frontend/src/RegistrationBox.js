import React from 'react'
import { useState } from 'react'

const RegistrationBox = ({ handleRegister }) => {
  return (
    <form>
      <label htmlFor="register" hidden>Registration Form</label>
      <input
        name="email"
        id="email"
        type="email"
        placeholder="Your Email"
        required
        value={newUser.email}
        onchange={e => {
          const val = e.target.value;
          setNewUser((prevState) => {
            return { ...prevState, email: val }
          });
        }}
      />
      <input
        name="username"
        id="username"
        type="text"
        placeholder="Your Username"
        required
        value={newUser.username}
        onchange={e => {
          const val = e.target.value;
          setNewUser((prevState) => {
            return { ...prevState, username: val }
          });
        }}
      />
      <input
        name="password"
        id="password"
        type="password"
        placeholder="Your Password"
        required
        value={newUser.password}
        onchange={e => {
          const val = e.target.value;
          setNewUser((prevState) => {
            return { ...prevState, password: val }
          });
        }}
      />
      <input
        name="confirm_password"
        id="confirm_password"
        type="password"
        placeholder="Confirm Your Password"
        required
        value={newUser.confirm_password}
        onchange={e => {
          const val = e.target.value;
          setNewUser((prevState) => {
            return { ...prevState, confirm_password: val }
          });
        }}
      />
      <button onClick={ handleRegister() }>Register</button>
    </form>
  )
}

export default RegistrationBox