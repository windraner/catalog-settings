import React from 'react';
import SettingsComponent from './SettingsComponent';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })

describe('<App />', () => {
  it('renders without crashing', () => {

  });
});
