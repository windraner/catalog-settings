import React from 'react';
import Title from './Title';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })

describe('<Title />', () => {
  it('Check for className and text', () => {
    const wrapper = shallow(<Title />);
    expect(wrapper.find('.catalog-settings__title').length).toBe(1);
    expect(wrapper.find('.catalog-settings__title').text()).toBe('General settings');
  });
  it('matches the snapshot', () => {
    const tree = shallow(<Title />)
    expect(tree).toMatchSnapshot()
  })
});
