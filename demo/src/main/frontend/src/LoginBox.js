import React from 'react'
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box"
import axios from 'axios';

const LoginBox = () => {
  const defaultFormValues = {
    username: "",
    password: ""
  };
  
  const [formValues, setFormValues] = useState(defaultFormValues);

  const defaultLoginStatusValues = {
    error: false,
    helperText: null
  };
  
  const [loginStatusValues, setLoginStatusValues] =
    useState(defaultLoginStatusValues)
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    setLoginStatusValues(defaultLoginStatusValues);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formValues);

    if (true) {
      setLoginStatusValues({
        error: true,
        helperText: 'Username / password error.'
      })
      return;
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
    <Box
      position="absolute"
      top="5ch"
      left="5ch"
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
          position="relative"
          top="3ch"
        >
          <Grid item>
            <TextField
              required
              error={loginStatusValues.error}
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
              error={loginStatusValues.error}
              helperText={loginStatusValues.helperText}
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
        </Grid>
      </form>
    </Box>
  );
};

export default LoginBox