import React from 'react';
import { shallow } from 'enzyme';
import Button from '../src/index';

function setup(props = {}) {
  const wrapper = shallow(<Button />);
  const instance = wrapper.instance();
  return { wrapper, instance };
}

describe('Button Component', () => {
  it('renders correctly', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
