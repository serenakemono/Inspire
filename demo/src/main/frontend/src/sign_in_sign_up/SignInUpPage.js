import React, { useState } from 'react';
import { ReactComponent as LoginAvatar } from './assets/LoginAvatar.svg'
import { ReactComponent as RegisterAvatar } from './assets/RegisterAvatar.svg'
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import { ReactComponent as InspireLogo } from '../common/assets/logo.svg'

const SignInUpPage = () => {

    const [isSignIn, setIsSignIn] = useState(true);

    const styles = {
        peepStyle: {
            width: 400,
            height: 400,
            justifyContent: "center",
            alignSelf: "center"
        },
    };

    const marginTop = isSignIn ? "55px" : "30px"
    
    return (
        <div>
            <InspireLogo
                style={{
                    width: "120px",
                    height: "auto",
                    marginLeft: "60px",
                    marginTop: "35px"
                }}
            />
        
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: marginTop,
            }}>

                <div style={{
                    zIndex: "-10",
                    display: "flex",
                    justifyContent: "center",
                    height: "-webkit-fill-available",
                    position: "relative",
                    paddingLeft: "100px"
                }}>
                    <LoginAvatar style={ styles.peepStyle }/>
                </div>

                <>
                    {isSignIn && <SignInForm setIsSignIn={setIsSignIn} />}
                    {!isSignIn && <SignUpForm setIsSignIn={setIsSignIn} />}
                </>

                <div style={{
                    zIndex: "-10",
                    display: "flex",
                    justifyContent: "center",
                    height: "-webkit-fill-available",
                    position: "relative",
                    paddingRight: "100px"
                }}>
                    <RegisterAvatar style={ styles.peepStyle }/>
                </div>


            </div>
        </div>
    );
};

export default SignInUpPage;