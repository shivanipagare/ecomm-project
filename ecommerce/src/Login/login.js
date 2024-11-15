// Login.js
import React from 'react';
import { MdLock } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './form.css';

const Login = () => {
  return (

    <div className="auth-container">
      <form className="auth-form">
        <div className="icon-container">
          <MdLock className="lock-icon" />
        </div>
        <h2>Login</h2>
        <div className="input-group">
          <label>Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="input-group">
          <label >Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button className="button">Login</button>
        <p className="link-paragraph">
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
      </form>
    </div>

  );
};

export default Login;
