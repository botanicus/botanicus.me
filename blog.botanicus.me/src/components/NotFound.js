import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class NotFound extends Component {
  componentDidMount() {
    setTimeout(() => browserHistory.push('/'), 2500);
  }

  render() {
    return (
      <section>
        <h1>Not found</h1>
        <p>
          The resource you requested doesn't exist.
          You will be redirected to the main page.
        </p>
      </section>
    );
  }
}
