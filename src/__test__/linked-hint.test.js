import React from 'react';
import LinkedHint from '../components/settings-content/upload-block/linkedHint/linked-hint';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('<LinkedHint />', () => {
  it('Check for href', () => {
    const wrapper = shallow(<LinkedHint link="test" />);
    expect(wrapper.find('.catalog-settings-content__hint-link').props().href).toBe('test');
  });
  it('matches the snapshot', () => {
    const tree = shallow(<LinkedHint link="test" />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
