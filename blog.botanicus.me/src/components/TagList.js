import React, { Component, PropTypes } from 'react';
import Link from '../lib/LinkToUnlessCurrent.js';

export default class TagList extends Component {
  static propTypes = {
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired
      })
    ).isRequired
  }

  renderTag(tag) {
    return (
      <li key={tag.path}>
        <Link to={tag.path}>{tag.title}</Link>
      </li>
    );
  }

  render() {
    const { tags } = this.props;

    return (
      <div>
        Tags:
        <ul className="tag-list">
          {tags.map(tag => this.renderTag(tag))}
        </ul>
      </div>
    );
  }
}
