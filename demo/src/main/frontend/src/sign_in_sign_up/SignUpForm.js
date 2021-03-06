import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box"
import axios from '../api/axios';


const SignUpForm = ({ setIsSignIn }) => {

    const REGISTER_URL = '/register';

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
        useState(defaultInputValidity);

    const [usernameValidity, setUsernameValidity] =
        useState(defaultInputValidity);

    const [emailValidity, setEmailValidity] =
        useState(defaultInputValidity);

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
            then(() => { setIsSignIn(true) }).
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
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                position: "relative",
                // right: "130px"
            }}>
            
            {/* <Button
                style={{
                    height: "40px",
                    width: "100px",
                    position: "relative",
                    left: "135px",
                    color: "#000000",
                    textTransform: "none",
                    fontSize: "20px"
                }}
                onClick={()=>setIsSignIn(true)}
            >
                Sign in
            </Button>
            
            <Box
                style={{
                    width: "150px",
                    height: "350px",
                    position: "relative",
                    left: "30px",
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
                
            </Box> */}

            <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
                style={{
                    width: "250px",
                    height: "450px",
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
                    Join Inspire
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
                            <Button
                                variant="contained"
                                type="submit"
                                style={{
                                    backgroundColor: "#e51b23",
                                    textTransform: "none"
                                }}
                            >
                                Join
                            </Button>
                        </Grid>
                        <Grid item>
                            <p>Have an account?
                                <Button
                                    style={{
                                        color: "#e51b23",
                                        textTransform: "none"
                                    }}
                                    onClick={()=>setIsSignIn(true)}
                                >Sign in</Button>
                            </p>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </div>
    )
}

export default SignUpForm