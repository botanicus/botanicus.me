import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class LinkToUnlessCurrent extends Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    hide: PropTypes.bool, /* Show nothing if route active. */
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  render() {
    const { children } = this.props;
    const location = this.context.router.getCurrentLocation();

    if (location.pathname === this.props.to) {
      return <span>{this.props.hide ? '' : children}</span>;
    } else {
      return <Link {...this.props} />;
    }
  }
}
