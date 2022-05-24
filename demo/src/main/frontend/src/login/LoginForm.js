import React from 'react'
import { useState, useRef, useEffect, useContext } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box"
import axios from '../api/axios';
import AuthContext from './AuthProvider';

const LOGIN_URL = '/login'

const LoginForm = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef(null);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  const defaultFormValues = {
    username: "",
    password: ""
  };
  
  const [formValues, setFormValues] = useState(defaultFormValues);

  const defaultLoginStatus = {
    error: false,
    helperText: null
  };
  
  const [loginStatus, setLoginStatus] =
    useState(defaultLoginStatus)
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    setLoginStatus(defaultLoginStatus);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(formValues);

    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles; // an array of roles
      setAuth({ user, pwd, roles, accessToken })
      setFormValues(defaultFormValues);
    } catch (err) {
      if (!err?.response) {
        setLoginStatus({
          error: true,
          helperText: "No server response."
        })
      } else if (err.response?.status === 400) {
        setLoginStatus({
          error: true,
          helperText: "Missing username or password."
        })
      } else if (err.response?.status === 401) {
        setLoginStatus({
          error: true,
          helperText: "Unauthroized."
        })
      } else {
        setLoginStatus({
          error: true,
          helperText: 'Wrong username or password.'
        })
      }
    }

    const dateTime = Date.now();
    const timestamp = Math.floor(dateTime / 1000);

    const loginUser = {
      username: formValues.username,
      password: formValues.password,
      timestampForLogin: timestamp
    };

    console.log({loginUser})

    axios.post(`http://localhost:8080/api/v1/user`, loginUser).
      then(res => {
        console.log(res);
        console.log(res.data);
      })
  };
  
  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px"
      }}>
    <Box
      alignItems="center"
      sx={{
        boxShadow: 1,
        borderRadius: 2,
        width: "25ch",
      }}>
      <form
        onSubmit={handleSubmit}
      >
        <Grid
          container
          alignItems="center"
          justify="center"
          direction="column"
          spacing={2}
          marginTop="3px"
          marginBottom="8px"
        >
          <Grid item>
            <TextField
              required
              error={loginStatus.error}
                id="username-input"
                ref={userRef}
              name="username"
              label="Username"
              type="text"
              value={formValues.username}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              required
              error={loginStatus.error}
              helperText={loginStatus.helperText}
              id="password-input"
              name="password"
              label="Password"
              type="password"
              value={formValues.password}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" type="submit">
              Login
            </Button>
            </Grid>
            <Grid>
              <p>
                Don't have an account?<br />
                <a href="/register">Join us</a>
              </p>
            </Grid>
        </Grid>
      </form>
      </Box>
      </div>
  );
};

export default LoginForm