import React from 'react';
import ToolTip from './ToolTip';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('<ToolTip />', () => {
  it('Check for className and text', () => {
    const wrapper = shallow(<ToolTip text="test" isShow={false} />);
    expect(wrapper.type()).toBe(null);
    wrapper.setProps({isShow: true});
    expect(wrapper.find('.catalog-settings-content__upload-tool-tip').text()).toBe('test');
  });
  it('matches the snapshot', () => {
    const tree = shallow(<ToolTip text="test" isShow={false} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
