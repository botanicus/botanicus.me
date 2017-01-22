import React, { Component, PropTypes } from 'react';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaGithub from 'react-icons/lib/fa/github';

export class TwitterIcon extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired
  }

  render() {
    return (
      <a className="social" href={`https://twitter.com/${this.props.username}`} target="_blank">
        <FaTwitter size={this.props.size} />
      </a>
    );
  }
}

export class GitHubIcon extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired
  }

  render() {
    return (
      <a className="social" href={`https://github.com/${this.props.username}`} target="_blank">
        <FaGithub size={this.props.size} />
      </a>
    );
  }
}
