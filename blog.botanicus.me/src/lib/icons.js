import React, { Component } from 'react';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaGithub from 'react-icons/lib/fa/github';

export class TwitterIcon extends Component {
  render() {
    return (
      <a className="social" href={`https://twitter.com/${this.props.username}`}>
        <FaTwitter size={this.props.size} />
      </a>
    );
  }
}

export class GitHubIcon extends Component {
  render() {
    return (
      <a className="social" href={`https://github.com/${this.props.username}`}>
        <FaGithub size={this.props.size} />
      </a>
    );
  }
}
