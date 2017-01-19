import React, { Component } from 'react';

export class Layout extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>El Blog</h2>
        </div>

        {this.props.children}
      </div>
    );
  }
}
