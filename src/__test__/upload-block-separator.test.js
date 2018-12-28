import React from 'react';
import UploadBlockSeparator from '../components/settings-content/upload-block/upload-block-separator/upload-block-separator.js';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('<UploadBlockSeparator />', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<UploadBlockSeparator />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
