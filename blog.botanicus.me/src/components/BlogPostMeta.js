import React, { Component, PropTypes } from 'react';
import Link from './lib/LinkToUnlessCurrent.js';
import TagList from './TagList.js';
import TimeAgo from 'react-timeago';

export default class BlogPostMeta extends Component {
  static propTypes = {
    post: PropTypes.shape({
      tags: TagList.propTypes.tags,
      published_at: PropTypes.string.isRequired,
      updated_at: PropTypes.string
    }).isRequired
  }

  showUpdatedIfWasUpdated(post) {
    if (post.updated_at) {
      return (
        <span>
          , updated&nbsp;
          <TimeAgo date={post.updated_at} />
        </span>
      );
    }
  }

  render() {
    const { post } = this.props;

    return (
      <div>
        <h2>
          <Link to={post.path}>{post.title}</Link>
          <TagList tags={post.tags} />
        </h2>

        <div style={{fontStyle: 'italic'}}>
          Published <TimeAgo date={post.published_at} />
          {this.showUpdatedIfWasUpdated(post)}.
        </div>
      </div>
    );
  }
}
