import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import GoogleAnalytics from '../GoogleAnalytics.js';

import Layout from './Layout.js';
import BlogIndex from './containers/BlogIndex.js';
import BlogPost from './containers/BlogPost.js';

import Tag from './containers/Tag.js';

import About from './About.js';
import NotFound from './NotFound.js'

browserHistory.listen((location) => {
  console.debug(`~ Google Analytics page view ${location.pathname}.`);
  GoogleAnalytics.set({page: location.pathname});
  GoogleAnalytics.pageview(location.pathname);
});

export default class RouterApp extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={BlogIndex} />
          <Route path='/about' component={About} />
          <Route path='/posts/:slug' component={BlogPost} />
          <Route path='/tags/:slug' component={Tag} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    );
  }
}
