import React from 'react'
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box"
import axios from '../api/axios';
import Peep from "react-peeps";
import { ReactComponent as LoginAvatar } from './LoginAvatar.svg'

const LoginForm = () => {
  
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

    axios.post(LOGIN_URL, formValues).
        then((response) => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            setFormValues(defaultFormValues);
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

  const styles = {
    peepStyle: {
      width: 300,
      height: 300,
      justifyContent: "center",
      alignSelf: "center"
    },
    showcaseWrapper: {
      display: "flex",
      justifyContent: "center",
      height: "-webkit-fill-available"
    }
  };
  
  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "160px",
    }}>

      <div style={styles.showcaseWrapper}>
        <LoginAvatar style={ styles.peepStyle }/>
        {/* <Peep
          style={{ ...styles.peepStyle }}
          body="WalkingWB"
          face="Cute"
          hair="MediumBangs"
          viewBox={{ x: "-20", y: "-330", width: "1050", height: "3000" }}
        /> */}
      </div>

      <div>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          sx={{
            boxShadow: 1,
            borderRadius: 2,
            width: "25ch",
          }}>
          <Grid
            item
            style={{
              paddingTop: "10px",
              fontSize: "25px"
            }}
          >
            Sign in
          </Grid>
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
                <Button
                  variant="contained"
                  type="submit"
                  style={{
                    backgroundColor: "#e51b23",
                    textTransform: "none"
                  }}
                >
                Login
              </Button>
            </Grid>
            <Grid item>
              <p>
                Don't have an account?&nbsp;&nbsp;
                  <a
                    href="/register"
                    style={{color: "#e51b23"}}
                  >Join us</a>
              </p>
            </Grid>
          </Grid>
          </form>
        </Box>
      </div>
    </div>
  );
};

export default LoginForm