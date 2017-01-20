import React from 'react';
import ReactDOM from 'react-dom';
import RouterApp from './RouterApp.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RouterApp />, div);
});
