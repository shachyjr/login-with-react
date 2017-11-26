import React, { Component } from 'react';

class Login extends Component {
  render() {
    const { setNav, handleLogin, handleUNChange, handlePWChange } = this.props;
    return [
      <h3 key="login-heading"> This is the Login page </h3>,
      <form key="login-form" onSubmit={handleLogin}>
        <input type="text" name="username" placeholder="Username" onChange={handleUNChange}></input>
        <input type="password" name="password" placeholder="Password" onChange={handlePWChange}></input>
        <input type="submit" value="Login"></input>
      </form>,
      <button key="register-button">Register</button>,
    ];
  }
}

export default Login;
