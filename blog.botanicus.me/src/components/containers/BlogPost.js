import React, { Component } from 'react';
import request from 'superagent';
import { serverURL } from '../../utils';
import Spinner from '../lib/Spinner.js';
import ServerError from '../lib/ServerError.js';
import { default as BlogPostXXX } from '../BlogPost.js';

export default class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {post: {}, isLoading: true};
  }

  componentDidMount() {
    document.title = `Post ${this.props.params.slug} (loading)`; // This one doesn't have any effect if we set document.title 2 in one method.
    request.get(serverURL(`${this.props.location.pathname}.json`)).end((error, response) => {
      this.setState({post: response && response.body, error, isLoading: false});
      document.title = this.state.post.title;
    });
  }

  render() {
    const { post, isLoading, error } = this.state;

    if (isLoading) {
      return <Spinner />;
    }

    if (error) {
      return <ServerError error={error} />;
    }

    return <BlogPostXXX post={post} />;
  }
}
