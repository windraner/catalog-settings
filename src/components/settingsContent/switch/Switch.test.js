import React from 'react';
import Switch from './Switch';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'

configure({ adapter: new Adapter() })

describe('<Switch />', () => {
  it('Check switcher input', () => {
    const wrapper = shallow(<Switch isChecked={true} handlerCallBack={function() {}} />);
    expect(wrapper.find('input').props().checked).toBe(true);
    wrapper.setProps({isChecked: false})
    expect(wrapper.find('input').props().checked).toBe(false);
  });
  it('Check switcher text', () => {
    const wrapper = shallow(<Switch isChecked={false} handlerCallBack={function() {}} />);
    expect(wrapper.find('.catalog-settings-content__switch-text').text()).toBe('Off');
    wrapper.setProps({isChecked: true})
    expect(wrapper.find('.catalog-settings-content__switch-text').text()).toBe('On');
  });
  it('matches the snapshot', () => {
    const tree = shallow(<Switch isChecked={true} handlerCallBack={function() {}} />)
    expect(toJson(tree)).toMatchSnapshot()
  })
});
