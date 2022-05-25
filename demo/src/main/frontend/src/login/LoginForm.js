import React from 'react'
import { useState, useRef, useEffect, useContext } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box"
import axios from '../api/axios';
import AuthContext from '../authentication/AuthProvider';
import AuthService from '../authentication/AuthService';

const LoginForm = () => {
  // const { setAuth } = useContext(AuthContext);
  // const userRef = useRef(null);

  // useEffect(() => {
  //   userRef.current.focus();
  // }, [])
  
  const LOGIN_URL = '/auth/login'
  
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

    setFormValues(defaultFormValues);

    axios.post(LOGIN_URL, formValues).
        then((response) => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            window.location.href = '/me';
        }).
        catch(function (error) {
          console.log(error)
          if (error.response) {
            console.log(error.response)
          }
          setLoginStatus({
            error: true,
            helperText: 'Wrong username or password.'
          })
        }
    )
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
          <Grid item>
            <p>
              Don't have an account?&nbsp;&nbsp;&nbsp;
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