import React, { Component } from 'react';
import request from 'superagent';
import { serverURL } from '../utils';
import BlogPostList from './BlogPostList.js';

export default class BlogIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {posts: [], isLoading: true};
  }

  componentDidMount() {
    document.title = 'MAIN TITLE: Loading ...';
    request.get(serverURL('/posts.json')).end((error, response) => {
      this.setState({posts: response && response.body, error, isLoading: false});
      this.state.post && (document.title = this.state.post.title);
    });
  }

  render() {
    const { posts, isLoading, error } = this.state;

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

    return <BlogPostList posts={posts} />;
  }
}
