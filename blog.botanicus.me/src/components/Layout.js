import React, { Component } from 'react';
import Link from './lib/LinkToUnlessCurrent.js';
import { TwitterIcon, GitHubIcon } from './lib/icons';
import Ribbon from 'react-github-fork-ribbon';
import { BLOG_TITLE, TOPTAL_PROFILE_URL } from '../constants.js';
import '../global.css';
import style from './Layout.mcss';

export default class Layout extends Component {
  componentDidMount() {
    document.title = BLOG_TITLE;
  }

  render() {
    return (
      <div>
        <Ribbon href={TOPTAL_PROFILE_URL}>
          Hire me on TopTal.com.
        </Ribbon>

        <header className={style.header}>
          <h1 className={style.title}>
            <Link to="/">El Blog</Link>
          </h1>
        </header>

        <main className={style.main}>
          {this.props.children}
        </main>

        <footer className={style.footer}>
          <ul>
            <li><TwitterIcon username="botanicus" /></li>
            <li><GitHubIcon  username="botanicus" /></li>
            <li><Link to="/about" hide>about</Link></li>
          </ul>
        </footer>
      </div>
    );
  }
}
