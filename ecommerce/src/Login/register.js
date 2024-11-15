// Register.js
import React from 'react';
import { MdLock } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './form.css';

const Register = () => {
  return (
    <div className="auth-container">
      <form className="auth-form">
        <div className="icon-container">
          <MdLock className="lock-icon" />
        </div>
        <h2>Register</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button className="button">Register</button>
        <p className="link-paragraph">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
