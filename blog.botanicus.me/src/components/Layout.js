import React, { Component } from 'react';
import Link from '../lib/LinkToUnlessCurrent.js';
import { TwitterIcon, GitHubIcon } from '../lib/icons';
import { BLOG_TITLE } from '../constants.js';
import './Layout.css';

export class Layout extends Component {
  componentDidMount() {
    document.title = BLOG_TITLE;
  }

  render() {
    return (
      <div className="app">
        <header>
          <h1 className="main-title">
            <Link to="/">El Blog</Link>
          </h1>
        </header>

        <main>
          {this.props.children}
        </main>

        <footer>
          <ul>
            <li><TwitterIcon username='botanicus' /></li>
            <li><GitHubIcon  username='botanicus' /></li>
          </ul>
        </footer>
      </div>
    );
  }
}
