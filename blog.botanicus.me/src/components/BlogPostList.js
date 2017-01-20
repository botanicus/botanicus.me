import React, { Component, PropTypes } from 'react';
import BlogPostPreview from './BlogPostPreview.js';

export default class BlogPostList extends Component {
  static propTypes = {
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        excerpt: PropTypes.string.isRequired,
      })
    ).isRequired
  }

  render() {
    const { posts } = this.props;

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
