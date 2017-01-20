import React, { Component } from 'react';
import Link from '../lib/LinkToUnlessCurrent.js';
import { TwitterIcon, GitHubIcon } from '../lib/icons';
import Ribbon from 'react-github-fork-ribbon';
import { BLOG_TITLE } from '../constants.js';
import './Layout.css';

export default class Layout extends Component {
  componentDidMount() {
    document.title = BLOG_TITLE;
  }

  render() {
    return (
      <div className="app">
        <Ribbon href="https://www.toptal.com/resume/james-c-russell">
          Hire me on TopTal.com.
        </Ribbon>

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
            <li><Link to="/about">about</Link></li>
          </ul>
        </footer>
      </div>
    );
  }
}
