import React from 'react';
import LinkInput from '../components/settings-content/upload-block/upload-link-block/link-input/link-input.js';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('<LinkInput />', () => {
  it('Check for className and text', () => {
    const wrapper = shallow(<LinkInput placeholder="test" inputHandler={function() {}} fileUrl={'fileUrl'} file={''} flags={{}} />);
    const input = wrapper.find('.catalog-settings-content__link-input');
    expect(input.props().placeholder).toBe('test');
    expect(input.props().value).toBe('fileUrl');
    expect(wrapper.find('.catalog-settings-content__link-input-clear').length).toBe(1);
    wrapper.setProps({fileUrl: ''});
    expect(wrapper.find('.catalog-settings-content__link-input-clear').length).toBe(0);
    wrapper.setProps({file: {}});
    expect(wrapper.find('.position-relative').length).toBe(0);
  });
  it('matches the snapshot1', () => {
    const tree = shallow(<LinkInput placeholder="test" inputHandler={function() {}} fileUrl="fileUrl" file={''} flags={{}} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
  it('matches the snapshot2', () => {
    const tree = shallow(<LinkInput placeholder="test" inputHandler={function() {}} fileUrl="" file={{}} flags={{}} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
