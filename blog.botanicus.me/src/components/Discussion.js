import React, { Component, PropTypes } from 'react';
import { default as Disqus } from 'react-disqus-comments';

export default class Discussion extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  handleNewComment(comment) {
    console.log(`Comment: ${comment.text}`);
  }

  // Disqus uses location.href as the identifier by default.
  // In case domain or protocol would be changed, everything
  // would break, so using location.pathname is better, although
  // not perfect either since URL could possibly change.
  render() {
    const { title } = this.props;
    const location  = this.context.router.getCurrentLocation();

    return (
      <Disqus shortname="botanicus-me"
              identifier={location.pathname}
              title={title}
              url={location.href}
              onNewComment={this.handleNewComment} />
    );
  }
}
