import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Layout } from './Layout.js';
import { BlogIndex, BlogPost } from './Blog.js';
import './Layout.css';


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
