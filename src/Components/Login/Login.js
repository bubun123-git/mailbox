import React, { useRef, useState } from 'react';
import './Login.css';
import Welcome from '../Welcome/Welcome';

import { useNavigate } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';

import user_icon from '../../Assets/person.png';
import email_icon from '../../Assets/email.png';
import password_icon from '../../Assets/password.png';

const Login = () => {
    const navigate = useNavigate();

    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const usernameInputRef = useRef();
    const [isLoggedIn, setIsLoggenIn] = useState(false);

    const [action, setAction] = useState('Sign Up');

    const submitHandler = (e) => {
        e.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        const authData = {
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
        };

        if (action === 'Sign Up') {
            authData.userName = usernameInputRef.current.value;
        }

        let url;
        if (action === 'Sign Up') {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCEG5Gwod_DMWZIDeZRt0cV16yPtodXr2c`;
        } else {
            // For login
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCEG5Gwod_DMWZIDeZRt0cV16yPtodXr2c`;
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(authData),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Authentication Failed');
                }
                return response.json();
            })
            .then((data) => {
                console.log('User has successfully signed up');
                setIsLoggenIn(true);
                navigate('/welcome');
            })
            .catch((error) => {
                console.log('Authentication Error', error);
            });
    };

    return (
        <form>
            <div className='container'>
                <div className='header'>
                    <div className='text'>{action}</div>
                    <div className='underline'></div>
                </div>

                <div className='inputs'>
                    {action === 'Login' ? (
                        <div></div>
                    ) : (
                        <div className='input-container'>
                            <img src={user_icon} alt='user' />
                            <input type='text' placeholder='Username' ref={usernameInputRef} />
                        </div>
                    )}

                    <div className='input-container'>
                        <img src={email_icon} alt='email' />
                        <input type='text' placeholder='Email' required ref={emailInputRef} />
                    </div>
                    <div className='input-container'>
                        <img src={password_icon} alt='password' />
                        <input type='password' placeholder='Password' required ref={passwordInputRef} />
                    </div>
                </div>
                {action === 'Sign Up' ? (
                    <div></div>
                ) : (
                    <div className='forgot-password'>
                         <ForgotPassword/>
                    </div>
                )}

                <div className='submit-container' onClick={submitHandler}>
                    <button className={action === 'Login' ? 'submit gray' : 'submit white'} onClick={() => setAction('Sign Up')}>
                        Sign Up
                    </button>



                    <button className={action === 'Sign Up' ? 'submit gray' : 'submit'} onClick={() => setAction('Login')}>
                        Login
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Login;
