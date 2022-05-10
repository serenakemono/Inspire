import React from 'react'

const LoginBox = () => {
  return (
    <main>
          <input
              name="account"
              id="account"
              type="text"
              placeholder="Email / username"
          />
          <input
              name="password"
              id="password"
              type="password"
              placeholder="Password"
          />
          <button>Login</button>
    </main>
  )
}

export default LoginBox