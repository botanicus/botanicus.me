import React from 'react';
import { shallow } from 'enzyme';
import LinkToUnlessCurrent from './LinkToUnlessCurrent.js';

const setLocation = (pathname) => {
  Object.defineProperty(location, 'pathname', {
    writable: true,
    value: pathname
  });
}

context("linked route is not the active one", () => {
  it("displays link to the route", () => {
    setLocation('/');

    const element = <LinkToUnlessCurrent to='/about'>About</LinkToUnlessCurrent>;
    const wrapper = shallow(element);
    expect(wrapper.find('Link').props().to).toEqual('/about');
    expect(wrapper.find('Link').length).toEqual(1);
    expect(wrapper.find('Link').props().to).toEqual('/about');
    expect(wrapper.find('Link').props().children).toEqual('About');
  });
})

context("linked route is the active one", () => {
  beforeEach(() => {
    setLocation('/about');
  })

  it("displays the text only", () => {
    const element = <LinkToUnlessCurrent to='/about'>About</LinkToUnlessCurrent>;
    const wrapper = shallow(element);
    expect(wrapper.text()).toEqual('About');
    expect(wrapper.find('a').length).toEqual(0);
  });

  it("displays nothing", () => {
    const element = <LinkToUnlessCurrent to='/about' hide={true}>About</LinkToUnlessCurrent>;
    const wrapper = shallow(element);
    expect(wrapper.text()).toEqual('');
    expect(wrapper.find('a').length).toEqual(0);
  });
})
