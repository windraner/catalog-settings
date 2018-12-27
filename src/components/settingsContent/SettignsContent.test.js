import React from 'react';
import SettignsContent from './SettignsContent';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'

configure({ adapter: new Adapter() })

const data = {
  title: 'Catalog title',
  description: 'Catalog description',
  defaultLanguage: 'en',
  additionalLanguages: ['es', 'ru'],
  defaultFallback: true,
  fileUrl: '',
  file: '',
  hideVariants: false
};

const props = {
  data,
  flags: {
    canUploadFile: true,
    canHideVariants: true
  },
  languages: ['en', 'es', 'ru', 'de'],
  getFormData: function() {},
}

describe('<SettignsContent />', () => {
  it('Check checkbox handler', () => {
    const wrapper = shallow(<SettignsContent {...props} />)
    expect(wrapper.instance().state.defaultFallback).toBe(true);
    wrapper.instance().checkboxHandler('defaultFallback')
    expect(wrapper.instance().state.defaultFallback).toBe(false);
  });
  it('Check inputHandler handler', () => {
    const wrapper = shallow(<SettignsContent {...props} />)
    expect(wrapper.instance().state.description).toBe("Catalog description");
    wrapper.instance().inputHandler('description', 'Catalog description test')
    expect(wrapper.instance().state.description).toBe("Catalog description test");
  });
  it('matches the snapshot', () => {
    const tree = shallow(<SettignsContent {...props} />)
    expect(tree).toMatchSnapshot()
  });
});
