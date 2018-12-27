import React from 'react';
import DisabledUploadButton from './DisabledUploadButton';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('<DisabledUploadButton />', () => {
  const wrapper = shallow(<DisabledUploadButton />);
  it('Check for className and text', () => {
    expect(wrapper.find('.catalog-settings-content__upload-button').length).toBe(1);
    expect(wrapper.find('.catalog-settings-content__upload-button').text()).toBe('<ToolTip />Upload file');
  });
  it('Check hover change state', () => {
    wrapper.find('.catalog-settings-content__upload-button').simulate('mouseEnter');
    expect(wrapper.state('isTooltipShow')).toBe(true);
    wrapper.find('.catalog-settings-content__upload-button').simulate('mouseLeave');
    expect(wrapper.state('isTooltipShow')).toBe(false);
  });
  it('matches the snapshot', () => {
    const tree = shallow(<DisabledUploadButton />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
