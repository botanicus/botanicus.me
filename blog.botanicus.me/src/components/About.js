import React, { Component } from 'react';
import Link from './lib/LinkToUnlessCurrent.js';
import MyStory from '../../../api.botanicus.me/posts/my-story.json';
import { TOPTAL_PROFILE_URL } from '../constants.js';
import profileImageURL from '../img/profile.jpg';

export default class About extends Component {
  componentDidMount() {
    document.title = 'About me';
  }

  render() {
    return (
      <article>
        <h1>About me</h1>
        <div style={{float: 'left', marginRight: 25}}>
          <img src={profileImageURL} role="presentation" />
          <div style={{color: "#aaa", fontStyle: 'italic', fontSize: 18}}>
            {/* This text shouldn't be longer than the image is wide. */}
            As I said, dancing and <br />suits keeps me happy.
          </div>
        </div>

        <p>
          Hi! My name is James.
          I love <abbr title="I dance swing, blues, tango and tap.">dancing</abbr>,
          writing <abbr title="I do Ruby, Ruby on Rails, JavaScript &amp; React.js.">code</abbr> and
          words, travelling and learning and doing anything from dancing to meditation.
          And suits. Oh my God, I really love suits so much!
        </p>

        <p>
          I was born in Czech Republic, found my obsession for creating stuff using
          technology, shortly after I got my first job in IT at the age of 18 and
          moved to London at the age of 19.
        </p>

        <p>
          Later I moved to Barcelona and even a bit later, I decided to become
          location independent, work remotely and get to know and understand other
          cultures.
        </p>

        <p>
          If you want to get to know more about me, read <Link to={MyStory.path}>my story</Link>.
        </p>

        <h2 style={{clear: 'left'}}>Contact</h2>
        <p>
          <strong>Professional:</strong> If you want to hire me, please go through
          my <a href={TOPTAL_PROFILE_URL} target="_blank">TopTal.com profile</a>.
        </p>

        <p>
          I'm available for hire as a Ruby, JavaScript &amp; React.js contractor
          for remote projects only and at this moment, I use TopTal.com exclusively.
        </p>

        <p>
          <strong>Personal:</strong> If we have ever met, you're welcome to add me
          on <a href="https://www.facebook.com/botanicus">FB</a>. I do not accept
          friend requests from people I don't remember meeting in person.
        </p>

        <p>
          I do not currently use any phone and I do not check Twitter or my
          personal email very often. I agree it's nuts, but I just like it this way.
        </p>

        <p style={{color: '#aaa', fontStyle: 'bold', display: 'none'}}>
          Would you like to get notified about my new posts?
          {/* TODO: subscribe and reenable (display none). */}
        </p>
      </article>
    );
  }
}
