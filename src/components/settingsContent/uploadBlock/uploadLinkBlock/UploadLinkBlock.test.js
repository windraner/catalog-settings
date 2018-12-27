import React from 'react';
import UploadLinkBlock from './UploadLinkBlock';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('<UploadLinkBlock />', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<UploadLinkBlock
      inputHandler={function() {}}
      fileUrl=""
      file=""
      flags={{}}
    />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
