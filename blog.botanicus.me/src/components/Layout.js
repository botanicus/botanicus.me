import React, { Component } from 'react';
import Link from '../lib/LinkToUnlessCurrent.js';
import './Layout.css';

export class Layout extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <h1 className="main-title">
            <Link to="/">El Blog</Link>
          </h1>
        </div>

        {this.props.children}
      </div>
    );
  }
}
