import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { BlogIndex, BlogPost } from './Blog.js';
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
          <IndexRoute component={BlogIndex} />
          <Route path='/posts/:slug' component={BlogPost} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    );
  }
}
