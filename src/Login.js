import React from 'react';
import { useDispatch } from 'react-redux';
import { auth, provider } from './firebase';
import { login } from './features/userSlice';
import './Login.css';
import { Button } from '@material-ui/core';


function Login() {
    const dispatch = useDispatch();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then(({ user }) => {
            dispatch(
                login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
            }))
        })
        .catch(error => alert(error.message))
    };

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://logos-world.net/wp-content/uploads/2020/11/Gmail-Emblem.png" alt="" />
                <Button varient="contained" onClick={signIn} >Login</Button>
            </div>
        </div>
    )
}

export default Login
