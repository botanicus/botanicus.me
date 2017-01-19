import React, { Component, propTypes } from 'react';
import { Link } from 'react-router';
import request from 'superagent';
import { serverURL } from '../utils';

/*
import { createStore } from 'redux';

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

export class BlogIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {posts: []};
  }

  componentDidMount() {
    request.get(serverURL('/posts.json')).end((error, response) => {
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
  static propTypes = {
    post: propTypes.shape({
      path: propTypes.string.isRequired,
      title: propTypes.string.isRequired,
      excerpt: propTypes.string.isRequired
    }).isRequired
  }

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
    request.get(serverURL(`${this.props.location.pathname}.json`)).end((error, response) => {
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
