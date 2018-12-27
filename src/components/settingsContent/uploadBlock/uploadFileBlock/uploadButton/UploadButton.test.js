import React from 'react';
import UploadButton from './UploadButton';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('<UploadButton />', () => {
  it('Check for className and text', () => {
    const wrapper = shallow(<UploadButton inputHandler={function() {}} fileUrl={''} file={''} flags={{}} />);
    const button = wrapper.find('.catalog-settings-content__upload-button');
    expect(button.text()).toBe('Upload file');
  });
  it('Check displaing remove button', () => {
    const wrapper = mount(<UploadButton inputHandler={function() {}} fileUrl={'fileUrl'} file={{name: 'test'}} flags={{}} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Check displaing enabled button', () => {
    const wrapper = mount(<UploadButton inputHandler={function() {}} fileUrl={'fileUrl'} file={''} flags={{}} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
