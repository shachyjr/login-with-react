import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleUNChange = this.handleUNChange.bind(this);
    this.handlePWChange = this.handlePWChange.bind(this);
  }

  handleLogin(event) {
    // event.preventDefault();
    console.log(`username: ${this.state.username} \npassword: ${this.state.password}`);
  }

  handleUNChange(event) {
    console.log('un: ', event.target.value);
    this.setState({ username: event.target.value });
  }

  handlePWChange(event) {
    console.log('pw: ', event.target.value);
    this.setState({ password: event.target.value });
  }

  render() {
    return [
      <Switch key="router">
        <Route exact path="/" render={() => <Login handleLogin={this.handleLogin} handleUNChange={this.handleUNChange} handlePWChange={this.handlePWChange} />} />
        <Route path="/register" render={() => <Register />} />
        <Route path="/*" render={() => <NotFound />} />
      </Switch>,
    ];
  }
}

export default App;
