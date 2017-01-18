import React, { Component } from 'react';
import { Link } from 'react-router';
import request from 'superagent';

export class BlogIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {posts: []};
  }

  componentDidMount() {
    request.get('http://api.unplug.it:8000/posts.json').end((error, response) => {
      this.setState({posts: response.body});
    });
  }

  render() {
    // const { posts } = this.props;
    const { posts } = this.state;

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
    request.get(`http://api.unplug.it:8000${this.props.location.pathname}.json`).end((error, response) => {
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
