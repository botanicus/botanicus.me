import React from 'react';
import { shallow } from 'enzyme';
import ServerError from './ServerError.js';

const error = {message: "Server exploded."};

it("displays the exact error that occured", () => {
  const wrapper = shallow(<ServerError error={error} />);
  expect(wrapper.text()).toMatch(/Server error/);
  expect(wrapper.text()).toMatch(/Server exploded/);
});
