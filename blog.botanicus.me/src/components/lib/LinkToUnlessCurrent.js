import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class LinkToUnlessCurrent extends Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    hide: PropTypes.bool, /* Show nothing if route active. */
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired
  }

  // This requires React router and it is hard to test.
  // static contextTypes = {
  //   router: PropTypes.object.isRequired
  // }

  render() {
    const { to, children } = this.props;
    // const location = this.context.router.getCurrentLocation();
    // return <span>{location.pathname}, {to}</span>

    if (location.pathname === to) {
      return this.props.hide ? <span /> : <span>{children}</span>;
    } else {
      return <Link to={to}>{children}</Link>;
    }
  }
}
