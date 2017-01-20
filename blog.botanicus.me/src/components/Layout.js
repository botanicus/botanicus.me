import React, { Component } from 'react';
import Link from '../lib/LinkToUnlessCurrent.js';
import './Layout.css';

export class Layout extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2><Link to="/">El Blog</Link></h2>
        </div>

        {this.props.children}
      </div>
    );
  }
}
