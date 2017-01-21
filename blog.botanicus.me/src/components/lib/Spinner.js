import React, { Component } from 'react';
import FaSpinner from 'react-icons/lib/fa/spinner';
import style from './Spinner.mcss';

console.log(style, style.test);

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <FaSpinner className="spinner" />
        &nbsp;<span style={{color: "#aaa"}}>Loading ...</span>
      </div>
    );
  }
}
