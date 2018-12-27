import React from 'react';
import TextArea from '../components/settingsContent/textArea/text-area';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('<TextArea />', () => {
  it('Check for className and text', () => {
    const wrapper = shallow(<TextArea value="test" onChange={function() {}} />);
    expect(wrapper.find('.catalog-settings-content__textarea').length).toBe(1);
    expect(wrapper.find('.catalog-settings-content__textarea').props().value).toBe('test');
  });
  it('matches the snapshot', () => {
    const tree = shallow(<TextArea value="test" onChange={function() {}} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
