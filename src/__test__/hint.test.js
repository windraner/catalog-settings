import React from 'react';
import Hint from '../components/settingsContent/hint/hint';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('<Hint />', () => {
  it('Check for className and text', () => {
    const wrapper = shallow(<Hint text="test" />);
    expect(wrapper.find('.catalog-settings-content__hint').length).toBe(1);
    expect(wrapper.find('.catalog-settings-content__hint').text()).toBe('test');
  });
  it('matches the snapshot', () => {
    const tree = shallow(<Hint />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
