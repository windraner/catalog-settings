import React from 'react';
import DisabledLinkInput from './DisabledLinkInput';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'

configure({ adapter: new Adapter() })

describe('<DisabledLinkInput />', () => {
  const wrapper = shallow(<DisabledLinkInput />)
  it('Check for className and text', () => {
    expect(wrapper.find('.catalog-settings-content__link-input').length).toBe(1);
    expect(wrapper.find('.catalog-settings-content__link-input').text()).toBe('<ToolTip />http://mysite.com/patch/to/CSV/source.csv');
  });
  it('Check hover change state', () => {
    wrapper.find('.catalog-settings-content__link-input').simulate("mouseEnter");
    expect(wrapper.state('isTooltipShow')).toBe(true);
    wrapper.find('.catalog-settings-content__link-input').simulate("mouseLeave");
    expect(wrapper.state('isTooltipShow')).toBe(false);
  });
  it('matches the snapshot', () => {
    const tree = shallow(<DisabledLinkInput />)
    expect(toJson(tree)).toMatchSnapshot()
  })
});
