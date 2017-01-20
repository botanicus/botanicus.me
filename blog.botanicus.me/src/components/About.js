import React, { Component } from 'react';
import Link from '../lib/LinkToUnlessCurrent.js';
import MyStory from '../../../api.botanicus.me/posts/my-story.json';

export default class About extends Component {
  componentDidMount() {
    document.title = 'About me';
  }

  render() {
    return (
      <article>
        <h1>About me</h1>
        <p>
          <Link to={MyStory.path}>my story</Link>
        </p>
      </article>
    );
  }
}
