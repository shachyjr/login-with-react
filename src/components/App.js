import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PrivateRoute from './PrivateRoute';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      user: null,
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleUNChange = this.handleUNChange.bind(this);
    this.handlePWChange = this.handlePWChange.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin(event) {
    event.preventDefault();
    const http = new XMLHttpRequest();
    http.open('POST', '/login', true);
    http.onreadystatechange = () => {
      if (http.readyState === 4 && http.status === 200) {
        this.setState({ user: http.responseText });
        this.props.history.push('/home');
      }
    };
    http.setRequestHeader('Content-Type', 'application/json');
    http.send(JSON.stringify({ username: this.state.username, password: this.state.password }));
  }

  handleUNChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePWChange(event) {
    this.setState({ password: event.target.value });
  }

  handleLogout() {
    this.setState({ user: null });
    this.props.history.push('/');
  }

  render() {
    return [
      <Switch key="router">
        <Route exact path="/" render={() => <Login handleLogin={this.handleLogin} handleUNChange={this.handleUNChange} handlePWChange={this.handlePWChange} user={this.state.user}/>} />
        <Route path="/register" render={() => <Register />} />
        <PrivateRoute path="/home" component={Home} user={this.state.user} handleLogout={this.handleLogout}/>
        <Route path="/*" render={() => <NotFound />} />
      </Switch>,
    ];
  }
}

export default withRouter(App);
