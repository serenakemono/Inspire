import React from 'react'
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box"
import axios from 'axios';

const RegistrationBox = () => {
  const defaultFormValues = {
    email: "",
    username: "",
    password: "",
    confirm_password: "",
  };
  
  const [formValues, setFormValues] = useState(defaultFormValues);

  const confirmPasswordStateDefaultValues = {
    error: false,
    helperText: null
  };
  
  const [confirmPasswordStateValues, setConfirmPasswordStateValues] =
    useState(confirmPasswordStateDefaultValues)
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    setConfirmPasswordStateValues(confirmPasswordStateDefaultValues);
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
      id: null,
      email: formValues.email,
      username: formValues.username,
      password: formValues.password,
      bio: null,
      timestampForRegistration: timestamp
    };

    console.log({appUser})

    axios.post(`http://localhost:8080/api/v1/user`, appUser).
      then(res => {
        console.log(res);
        console.log(res.data);
      })
  };
  
  return (
    <Box
      alignItems="center"
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
        >
          <Grid item>
            <TextField
              required
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
          
        </Grid>
        </form>
      </Box>
  );
};

export default RegistrationBox