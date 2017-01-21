import React, { Component } from 'react';
import FaSpinner from 'react-icons/lib/fa/spinner';
import style from './Spinner.mcss';

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <FaSpinner className={style.spinner} />
        &nbsp;<span className={style.loading}>Loading ...</span>
      </div>
    );
  }
}
