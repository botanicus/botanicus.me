import React, { Component } from 'react';
import BlogPostPreview from './BlogPostPreview.js';
import request from 'superagent';
import { serverURL } from '../utils';

export default class BlogIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {posts: [], isLoading: true};
  }

  componentDidMount() {
    request.get(serverURL('/posts.json')).end((error, response) => {
      this.setState({posts: response && response.body, error, isLoading: false});
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

    return this.renderPosts(posts);
  }

  renderPosts(posts) {
    if (!posts.length) {
      return this.renderEmptyPostsNotice();
    }

    return (
      <div>
        {posts.map(post => this.renderPost(post))}
      </div>
    );
  }

  renderEmptyPostsNotice() {
    return (
      <div>There are no posts yet.</div>
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
