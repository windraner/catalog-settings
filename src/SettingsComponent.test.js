import React from 'react';
import SettingsComponent from './SettingsComponent';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

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
  onSave: function() {},
  onCancel: function() {},
}

describe('<SettingsComponent />', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<SettingsComponent {...props} />)
    expect(tree).toMatchSnapshot()
  });
});
