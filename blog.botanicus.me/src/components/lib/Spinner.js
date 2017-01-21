import React, { Component } from 'react';
import FaSpinner from 'react-icons/lib/fa/spinner';

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <FaSpinner />
        <span style={{color: "#aaa"}}>Loading ...</span>
      </div>
    );
  }
}
