import React, { useState } from "react";
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

const Login = (props) => {
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const onChange = (event) => {
        if (event.target.name === 'loginUsername') {
            setLoginUsername(event.target.value);
        } else if (event.target.name === 'loginPassword') {
            setLoginPassword(event.target.value);
        }
    }

    const accountLogin = async (event) => {
        event.preventDefault();
        let username = loginUsername;
        let password = loginPassword;
        try {
            const response = await axios.post('/api/users/login', {
                username,
                password
            });
            console.log(response);
            if (!response.data.success) {
                console.log("Login failed.")
                setErrorMessage("Username or password is incorrect.");
            } else {
                props.setUserToken(response.data.token);
                props.setIsLoggedIn(true);
            }
        } catch (err) {
            setErrorMessage("Username or password is incorrect.");
            console.log(err);
            throw err;
        }
    }

    return (
        <div class="container" id="loginform">
            <br />
            <h1>Login</h1>
            <form>

                <div class="form-floating mb-3">
                    <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        value={loginUsername}
                        onChange={onChange}
                        name='loginUsername'
                        placeholder="Username" />

                    <label for="floatingInput">Username</label>
                </div>

                <div class="form-floating">
                    <input
                        type="password"
                        class="form-control"
                        id="floatingPassword"
                        value={loginPassword}
                        onChange={onChange}
                        name='loginPassword'
                        placeholder="Password"></input>

                    <label for="floatingPassword">Password</label>
                </div><br />

                {props.isLoggedIn ? <Navigate to='/routines' /> : <div className='text-danger'>{errorMessage}</div>}

                <button
                    type="Login"
                    class="btn btn-primary"
                    onClick={accountLogin}>
                    Login
                </button>

                <Link to='/register'><button type="Login" class="btn btn-primary">Register</button></Link>

            </form>
        </div>
    )
}

export default Login;