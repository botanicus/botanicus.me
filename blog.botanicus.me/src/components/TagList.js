import React, { Component, PropTypes } from 'react';
import Link from './lib/LinkToUnlessCurrent.js';
import style from './TagList.mcss';

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

    if (!tags.length) return <span />;

    return (
      <ul className={style.list}>
        {tags.map(tag => this.renderTag(tag))}
      </ul>
    );
  }
}
