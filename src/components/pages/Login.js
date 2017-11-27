import React from 'react';

const Login = ({ handleLogin, handleUNChange, handlePWChange }) => [
  <h3 key="login-heading"> This is the Login page </h3>,
  <form key="login-form" onSubmit={handleLogin}>
    <input type="text" name="username" placeholder="Username" onChange={handleUNChange}></input>
    <input type="password" name="password" placeholder="Password" onChange={handlePWChange}></input>
    <input type="submit" value="Login"></input>
  </form>,
  <button key="register-button">Register</button>,
];

export default Login;
