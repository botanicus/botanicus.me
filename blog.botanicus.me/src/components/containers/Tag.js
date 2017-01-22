import React, { Component } from 'react';
import request from 'superagent';
import { serverURL } from '../../utils';
import Spinner from '../lib/Spinner.js';
import ServerError from '../lib/ServerError.js';
import BlogPostList from '../BlogPostList.js';

export default class Tag extends Component {
  constructor(props) {
    super(props);
    this.state = {tag: {}, isLoading: true};
  }

  componentDidMount() {
    document.title = 'MAIN TITLE: Loading ...';
    request.get(serverURL(`${this.props.location.pathname}.json`)).end((error, response) => {
      this.setState({tag: response && response.body, error, isLoading: false});
      document.title = `Tag ${this.state.tag.tag.title}`;
    });
  }

  render() {
    const { tag, isLoading, error } = this.state;

    if (isLoading) {
      return <Spinner />;
    }

    if (error) {
      return <ServerError error={error} />;
    }

    return (
      <article>
        <h1 style={{textTransform: 'capitalize'}}>{tag.tag.title}</h1>
        <BlogPostList posts={tag.posts} />
      </article>
    );
  }
}
