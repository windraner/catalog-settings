import React from 'react';
import Title from '../components/settingsContent/title/title';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Title />', () => {
  it('Check text when required={true}', () => {
    const wrapper = shallow(<Title title="title" required={true} />);
    expect(wrapper.find('.catalog-settings-content__input-title').length).toBe(1);
    expect(wrapper.find('.catalog-settings-content__input-title').text()).toBe('title*');
  });
  it('Check text when required={true}', () => {
    const wrapper = shallow(<Title title="title" required={false} />);
    expect(wrapper.find('.catalog-settings-content__input-title').length).toBe(1);
    expect(wrapper.find('.catalog-settings-content__input-title').text()).toBe('title');
  });
  it('matches the snapshot', () => {
    const tree = shallow(<Title />);
    expect(tree).toMatchSnapshot();
  });
});
