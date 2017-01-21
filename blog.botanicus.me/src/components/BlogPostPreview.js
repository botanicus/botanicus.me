import React, { Component, PropTypes } from 'react';
import Link from '../lib/LinkToUnlessCurrent.js';
import BlogPostMeta from './BlogPostMeta.js';
import TagList from './TagList.js';

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
        <h2><Link to={post.path}>{post.title}</Link></h2>
        <TagList tags={post.tags} />
        <BlogPostMeta post={post} />
        <p className="excerpt">
          {post.excerpt}
        </p>
      </article>
    );
  }
}
