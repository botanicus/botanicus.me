import React, { Component } from 'react';
import request from 'superagent';
import { serverURL } from '../../utils';
import Spinner from '../lib/Spinner.js';
import ServerError from '../lib/ServerError.js';
import BlogPostList from '../BlogPostList.js';

export default class BlogIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {posts: [], isLoading: true};
  }

  componentDidMount() {
    document.title = 'Blog of James C Russell';
    request.get(serverURL('/posts.json')).end((error, response) => {
      this.setState({posts: response && response.body, error, isLoading: false});
    });
  }

  render() {
    const { posts, isLoading, error } = this.state;

    if (isLoading) {
      return <Spinner />;
    }

    if (error) {
      return <ServerError error={error} />;
    }

    return <BlogPostList posts={posts} />;
  }
}
