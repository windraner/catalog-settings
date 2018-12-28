import React from 'react';
import InputField from '../components/settings-content/input-field/input-field';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('<InputField />', () => {
  it('Check for className and text', () => {
    const wrapper = shallow(<InputField value="test" />);
    expect(wrapper.find('.catalog-settings-content__input-field').length).toBe(1);
    expect(wrapper.find('.catalog-settings-content__input-field').props().value).toBe('test');
  });
  it('Check validation', () => {
    const wrapper = shallow(<InputField />);
    expect(wrapper.find('.catalog-settings-content__error-message').length).toBe(0);
    wrapper.setState({ isValidated: true });
    expect(wrapper.find('.catalog-settings-content__error-message').length).toBe(0);
    wrapper.setProps({ required: true });
    expect(wrapper.find('.catalog-settings-content__error-message').text()).toBe('Can not be empty');
  });
  it('matches the snapshot', () => {
    const tree = shallow(<InputField />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
