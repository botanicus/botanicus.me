import React, { Component } from 'react';
import request from 'superagent';
import Discussion from './Discussion.js';
import BlogPostMeta from './BlogPostMeta.js';
import { serverURL } from '../utils';

export default class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {post: {}, isLoading: true};
  }

  componentDidMount() {
    document.title = 'MAIN TITLE: Loading ...';
    request.get(serverURL(`${this.props.location.pathname}.json`)).end((error, response) => {
      this.setState({post: response && response.body, error, isLoading: false});
      document.title = this.state.post.title;
    });
  }

  render() {
    const { post, isLoading, error } = this.state;

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
        <BlogPostMeta post={post} />
        <p className="excerpt">
          {post.excerpt}
        </p>

        <div dangerouslySetInnerHTML={{__html: post.body}} />

        <Discussion title={post.title} />
      </article>
    );
  }
}
