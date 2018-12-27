import React from 'react';
import UploadFileBlock from '../components/settings-content/upload-block/upload-file-block/upload-file-block';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('<UploadFileBlock />', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<UploadFileBlock
      inputHandler={function() {}}
      fileUrl=""
      file=""
      flags={{}}
    />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
