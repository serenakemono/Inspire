import React from 'react'
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box"
import axios from '../api/axios';
import RedirectAftRegistration from './RedirectAftRegistration';

const REGISTER_URL = '/register'

const RegistrationForm = () => {
  const defaultFormValues = {
    email: "",
    username: "",
    password: "",
    confirm_password: "",
  };
  
  const [formValues, setFormValues] = useState(defaultFormValues);

  const defaultInputValidity = {
    error: false,
    helperText: null
  };
  
  const [
    confirmPasswordStateValues,
    setConfirmPasswordStateValues
  ] =
    useState(defaultInputValidity)
  
  const [usernameValidity, setUsernameValidity] =
    useState(defaultInputValidity)
  
  const [emailValidity, setEmailValidity] =
    useState(defaultInputValidity)
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    setConfirmPasswordStateValues(
      defaultInputValidity);
    
    setUsernameValidity(defaultInputValidity);

    setEmailValidity(defaultInputValidity);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formValues);

    if (formValues.password != formValues.confirm_password) {
      setConfirmPasswordStateValues({
        error: true,
        helperText: 'Passwords do not match.'
      })
      return;
    }

    const dateTime = Date.now();
    const timestamp = Math.floor(dateTime / 1000);

    const appUser = {
      email: formValues.email,
      username: formValues.username,
      password: formValues.password,
      bio: null,
      timestampForRegistration: timestamp
    };

    console.log({ appUser })

    axios.post(REGISTER_URL, appUser).
      then(() => { window.location.href = '/redirect'; }).
      catch(function (error) {
        console.log(error);
        if (error.response) {
          const errorMsg = error.response.data.message;
          if (errorMsg.includes("username")) {
            setUsernameValidity({ error: true, helperText: errorMsg });
          } else if (errorMsg.includes("email")) {
            setEmailValidity({ error: true, helperText: errorMsg });
          } else {
            alert(errorMsg);
          }
        }
      }
    )
  };
  
  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px"
      }}
    >
    <Box
      sx={{
        boxShadow: 1,
        borderRadius: 2,
        width: "25ch",
      }}>
      <form onSubmit={handleSubmit}>
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
              error={usernameValidity.error}
              helperText={usernameValidity.helperText}
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
              error={emailValidity.error}
              helperText={emailValidity.helperText}
              id="email-input"
              name="email"
              label="Email"
              type="email"
              value={formValues.email}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              required
              error={confirmPasswordStateValues.error}
              id="password-input"
              name="password"
              label="Password"
              type="password"
              value={formValues.password}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              required
              error={confirmPasswordStateValues.error}
              helperText={confirmPasswordStateValues.helperText}
              id="confirm_password-input"
              name="confirm_password"
              label="Confirm Password"
              type="password"
              value={formValues.confirm_password}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" type="submit">
              Join
            </Button>
            </Grid>
            <Grid item>
            <p>Have an account?&nbsp;&nbsp;&nbsp;
              <a href="/login">Sign in</a>
            </p>
          </Grid>
          </Grid>
          
        </form>
      </Box>
    </div>
  );
};

export default RegistrationForm