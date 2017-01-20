import React, { Component, PropTypes } from 'react';
import Link from '../lib/LinkToUnlessCurrent.js';
import TagList from './TagList.js';
import TimeAgo from 'react-timeago';

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

    console.log(post);
    return (
      <article>
        <h2><Link to={post.path}>{post.title}</Link></h2>
        <TimeAgo date={post.published_at} />
        <TagList tags={post.tags} />
        <p className="excerpt">
          {post.excerpt}
        </p>
      </article>
    );
  }
}
