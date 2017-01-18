import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './App.css';

class Layout extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

class Home extends Component {
  render() {
    return (<h1>Home sweet home!</h1>);
  }
}

class NotFound extends Component {
  render() {
    return (<h1>404</h1>);
  }
}

export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Home} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    );
  }
}
