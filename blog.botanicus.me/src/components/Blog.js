import React, { Component, PropTypes } from 'react';
import Link from '../lib/LinkToUnlessCurrent.js';
import request from 'superagent';
import { default as Disqus } from 'react-disqus-comments';
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

    if (posts) {
      return this.renderPosts(posts);
    } else {
      return (
        <div className="error">
          Server error.
        </div>
      );
    }
  }

  renderPosts(posts) {
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
    post: PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired
    }).isRequired
  }

  render() {
    const { post } = this.props;

    return (
      <article>
        <h2><Link to={post.path}>{post.title}</Link></h2>
        <p className="excerpt">
          {post.excerpt}
        </p>
      </article>
    );
  }
}

class Discussion extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  handleNewComment(comment) {
    console.log(`Comment: ${comment.text}`);
  }

  // Disqus uses location.href as the identifier by default.
  // In case domain or protocol would be changed, everything
  // would break, so using location.pathname is better, although
  // not perfect either since URL could possibly change.
  render() {
    const location = this.context.router.getCurrentLocation();

    return (
      <Disqus shortname="botanicus-me"
              identifier={location.pathname}
              title={this.props.title}
              url={location.href}
              onNewComment={this.handleNewComment} />
    );
  }
}

export class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {post: {}};
  }

  componentDidMount() {
    document.title = 'MAIN TITLE: Loading ...';
    request.get(serverURL(`${this.props.location.pathname}.json`)).end((error, response) => {
      this.setState({post: response.body});
      document.title = this.state.post.title;
    });
  }

  render() {
    const { post } = this.state;

    return (
      <article>
        <h1>{post.title}</h1>
        <p className="excerpt">
          {post.excerpt}
        </p>

        <div dangerouslySetInnerHTML={{__html: post.body}} />

        <Discussion title={post.title} />
      </article>
    );
  }
}
