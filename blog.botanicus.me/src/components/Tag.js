import React, { Component } from 'react';
import request from 'superagent';
import { serverURL } from '../utils';
import BlogPostList from './BlogPostList.js';

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

  // tag.feed
  render() {
    const { tag, isLoading, error } = this.state;

    if (isLoading) {
      return (
        <div>Loading ...</div>
      );
    }

    if (error) {
      console.error("Error", error);

      return (
        <div className="error">
          <h1>Server error.</h1>
          <code>{error.message}</code>

          <p>
            Sorry about that. Please <a href="mailto:james@101ideas.cz">shoot me an email</a> and I'll fix it.
          </p>
        </div>
      );
    }

    return (
      <article>
        <h1 style={{textTransform: 'capitalize'}}>{tag.tag.title}</h1>
        <BlogPostList posts={tag.posts} />
      </article>
    );
  }
}
