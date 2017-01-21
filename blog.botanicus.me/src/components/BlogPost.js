import React, { Component, PropTypes } from 'react';
import Discussion from './lib/Discussion.js';
import BlogPostMeta from './BlogPostMeta.js';
import TagList from './TagList.js';

export default class BlogPost extends Component {
  static propTypes = {
    post: PropTypes.shape({
      tags: TagList.propTypes.tags,
      published_at: PropTypes.string.isRequired,
      updated_at: PropTypes.string,
      excerpt: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
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

        <div dangerouslySetInnerHTML={{__html: post.body}} />

        <Discussion title={post.title} />
      </article>
    );
  }
}
