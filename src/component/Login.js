import { Button } from '@material-ui/core';
import { auth, provider } from '../util/firebase';
import React from 'react'

import ThisCordLogo from '../assets/thiscord-logo.png';
import './Login.css';

const Login = () => {
    const signIn = () => {
        auth.signInWithPopup(provider).catch(error => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src={ThisCordLogo} alt="ThisCordLogo" />
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
