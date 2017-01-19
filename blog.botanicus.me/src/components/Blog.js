import React, { Component } from 'react';
import { Link } from 'react-router';
import request from 'superagent';
import { createStore } from 'redux';

/*
state {
  routes: {
    "/": {"posts": [...]},
    "/posts/learning-tango": {"title": ...},
    "/tags/tango": {"posts": [...]}
  }
}

... plug in react-router-redux.
const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'DATA_FETCHED':
      return {};
    default:
      return state;
  }
}

const store = createStore(reducer);
*/

// TODO: Use context instead:
// https://facebook.github.io/react/docs/context.html
if (process.env.NODE_ENV === 'development') {
  window.API_BASE_URL = 'http://api.botanicus.dev:8000';
}
else if (process.env.NODE_ENV === 'production') {
  window.API_BASE_URL = 'http://api.botanicus.me';
} else {
  console.error(`Unhandled environment: ${process.env.NODE_ENV}`)
}

export class BlogIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {posts: []};
  }

  componentDidMount() {
    request.get(`${window.API_BASE_URL}/posts.json`).end((error, response) => {
      this.setState({posts: response.body});
    });
  }

  render() {
    // const { posts } = this.props;
    const { posts } = this.state;

    return (
      <div>
        {posts.map(post => this.renderPost(post))}
      </div>
    );
  }

  renderPost(post) {
    return (
      <div key={post.slug}>
        <BlogPostPreview post={post} />
      </div>
    );
  }
}

class BlogPostPreview extends Component {
  render() {
    const { post } = this.props;

    return (
      <div>
        <h2><Link to={post.path}>{post.title}</Link></h2>
        <p id="excerpt">
          {post.excerpt}
        </p>
      </div>
    );
  }
}

export class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {post: {}};
  }

  componentDidMount() {
    request.get(`${window.API_BASE_URL}${this.props.location.pathname}.json`).end((error, response) => {
      this.setState({post: response.body});
    });
  }

  render() {
    const { post } = this.state;

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
