import React from 'react';
import { shallow } from 'enzyme';
import { TwitterIcon, GitHubIcon } from './icons.js';

describe("TwitterIcon", () => {
  it("displays the loading indicator", () => {
    const wrapper = shallow(<TwitterIcon username='botanicus' />);
    expect(wrapper.find('a').text()).toMatch(/<FaTwitter \/>/);
    // TODO: Test the link.
  });
});

describe("GitHubIcon", () => {
  // TODO.
});
