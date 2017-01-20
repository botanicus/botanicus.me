import React, { Component, PropTypes } from 'react';
import Link from '../lib/LinkToUnlessCurrent.js';

export default class BlogPostPreview extends Component {
  static propTypes = {
    post: PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired
    }).isRequired
  }

  render() {
    const { post } = this.props;

    return (
      <article>
        <h2><Link to={post.path}>{post.title}</Link></h2>
        <p className="excerpt">
          {post.excerpt}
        </p>
      </article>
    );
  }
}