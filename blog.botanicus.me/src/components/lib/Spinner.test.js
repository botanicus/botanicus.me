import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './Spinner.js';

it("displays the loading indicator", () => {
  const wrapper = shallow(<Spinner />);
  expect(wrapper.text()).toMatch(/loading/i);
});
