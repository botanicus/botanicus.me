import React, { Component } from 'react';
import request from 'superagent';
import Discussion from './Discussion.js';
import { serverURL } from '../utils';

export default class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {post: {}};
  }

  componentDidMount() {
    document.title = 'MAIN TITLE: Loading ...';
    request.get(serverURL(`${this.props.location.pathname}.json`)).end((error, response) => {
      this.setState({post: response.body});
      document.title = this.state.post.title;
    });
  }

  render() {
    const { post } = this.state;

    return (
      <article>
        <h1>{post.title}</h1>
        <p className="excerpt">
          {post.excerpt}
        </p>

        <div dangerouslySetInnerHTML={{__html: post.body}} />

        <Discussion title={post.title} />
      </article>
    );
  }
}
