import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box"
import axios from '../api/axios';

const SignInForm = ({ setIsSignIn }) => {

    const LOGIN_URL = '/auth/login'
    const GET_USERNAME_URL = 'http://localhost:8080/api/v1/auth/userinfo'
    
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

    const [token, setToken] = useState('');
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        const login = async () => {
            const res = await axios.post(LOGIN_URL, formValues);
            localStorage.setItem("user", JSON.stringify(res.data));
            console.log('The token received: ' + res.data.token);
            const info = await axios.get(GET_USERNAME_URL,
                { headers: { "Authorization": `Bearer ${res.data.token}` } });
            localStorage.setItem("info", JSON.stringify(info.data));
        }

        login()
            .then(()=>window.location.href = '/me')
            .catch(error => {
            console.log(error.reponse);
            setLoginStatus({
                error: true,
                helperText: 'Wrong username or password.'
            })
            return;
        })
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                position: "relative",
                left: "120px",
            }}>
            <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
                style={{
                    width: "250px",
                    height: "310px",
                    backgroundColor: "#ffffff",
                }}
                sx={{
                    boxShadow: 1,
                    borderRadius: 2,
                    width: "25ch",
                }}
            >
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
                                Don't have an account?
                                <Button
                                    style={{
                                        color: "#e51b23",
                                        textTransform: "none"
                                    }}
                                    onClick={()=>setIsSignIn(false)}
                                >Join us</Button>
                            </p>
                        </Grid>
                    </Grid>
                </form>
            </Box>
            <Box
                style={{
                    width: "150px",
                    height: "260px",
                    position: "relative",
                    right: "30px",
                    zIndex: "-1",
                    backgroundColor: "#f8c6c8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end"
                }}
                sx={{
                    boxShadow: 1,
                    borderRadius: 2,
                    width: "25ch",
                }}
            >
            </Box>
            <Button
                style={{
                    height: "40px",
                    width: "100px",
                    position: "relative",
                    right: "135px",
                    color: "#000000",
                    textTransform: "none",
                    fontSize: "20px"
                }}
                onClick={()=>setIsSignIn(false)}
            >
                Sign up
            </Button>
        </div>
  )
}

export default SignInForm