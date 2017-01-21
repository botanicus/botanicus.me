import React, { Component, PropTypes } from 'react';
import BlogPostMeta from './BlogPostMeta.js';

export default class BlogPostPreview extends Component {
  static propTypes = {
    post: PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
      published_at: BlogPostMeta.propTypes.post.published_at,
      updated_at: BlogPostMeta.propTypes.post.published_at
    }).isRequired
  }

  render() {
    const { post } = this.props;

    return (
      <article>
        <BlogPostMeta post={post} />
        <p className="excerpt">
          {post.excerpt}
        </p>
      </article>
    );
  }
}
