import React from 'react';
import { auth } from './firebase';
import './Login.css';
import Button from '@mui/material/Button';


function Login() {

    const signIn = () => {
        // auth
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://logos-world.net/wp-content/uploads/2020/11/Gmail-Logo.png" alt="" />
                <Button varient="contained" onCLick={signIn}>Login</Button>
            </div>
        </div>
    )
}

export default Login
