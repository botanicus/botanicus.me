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

class BlogIndex extends Component {
  render() {
    //const { posts } = this.props;
    const posts = [{slug: "test", title: "Test", excerpt: "Hello", body: "<b>Body.</b>"}]; // Before we set up Redux.

    return (
      <div>
        <h1>My blog</h1>
        {posts.map(post => this.renderPost(post))}
      </div>
    );
  }

  renderPost(post) {
    return (
      <div key={post.slug}>
        <BlogPost post={post} />
      </div>
    );
  }
}

class BlogPost extends Component {
  render() {
    const { post } = this.props;

    return (
      <div>
        <h1>{post.title}</h1>
        <p id="excerpt">
          {post.excerpt}
        </p>

        <div dangerouslySetInnerHTML={{__html: post.body}} />
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
