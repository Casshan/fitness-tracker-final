import React from 'react';
import { Link } from 'react-router-dom';


const Register = () => {

    return (
        <div class="container" id="loginform">
            <br />
            <h1>Register</h1>
            <form>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="Username"></input>
                    <label for="floatingInput">Username</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"></input>
                    <label for="floatingPassword">Password</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"></input>
                    <label for="floatingPassword">Confirm Password</label>
                </div>
                <button type="Login" class="btn btn-primary">Register</button>
                <div>
                    <small className="form-text text-muted">Already have an account? <Link to='/login'>Click Here.</Link></small>
                </div>
            </form>
        </div>
    )
}

export default Register;