/*
  Be aware of what contact methods do you list on your /about page.

  At the moment I show my email, while I say I don't use an email. Hmm.
*/

import React, { Component, PropTypes } from 'react';

export default class ServerError extends Component {
  static propTypes = {
    error: PropTypes.shape({
      message: PropTypes.string.isRequired
    }).isRequired
  }

  render() {
    const { error } = this.props;

    console.error("Error", error);

    return (
      <div className="error">
        <h1>Server error.</h1>
        <code>{error.message}</code>

        <p>
          Sorry about that. Please <a href="mailto:james@101ideas.cz">shoot me an email</a> and I'll fix it.
        </p>
      </div>
    );
  }
}
