import React from 'react';
import UploadButtonRemove from './UploadButtonRemove';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'

configure({ adapter: new Adapter() })

describe('<UploadButtonRemove />', () => {
  it('Check for text prop', () => {
    const wrapper = shallow(<UploadButtonRemove inputHandler={function() {}} text="test" />);
    expect(wrapper.find('.catalog-settings-content__remove-upload-button').text()).toBe('test');
  });
  it('Check for click', () => {
    const onClickFunc = jest.fn();
    const wrapper = shallow(<UploadButtonRemove inputHandler={onClickFunc} text="" />);
    const button = wrapper.find('.catalog-settings-content__upload-button-remove-icon');
    button.simulate('click');
    expect(onClickFunc).toBeCalled();
    expect(onClickFunc.mock.calls).toEqual([["file", ""]]);
  });
  it('matches the snapshot', () => {
    const tree = shallow(<UploadButtonRemove
      inputHandler={function() {}}
      text=""
    />)
    expect(toJson(tree)).toMatchSnapshot()
  })
});
