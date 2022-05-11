import React from 'react'

const LoginBox = () => {
  return (
    <form>
      <input
          name="account"
          id="account"
          type="text"
          placeholder="Email / Username"
          required
      />
      <input
          name="password"
          id="password"
          type="password"
          placeholder="Password"
          required
      />
      <button>Login</button>
    </form>   
  )
}

export default LoginBox