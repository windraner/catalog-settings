import React from 'react';
import UploadBlock from './UploadBlock';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'

configure({ adapter: new Adapter() })

describe('<UploadBlock />', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<UploadBlock
      inputHandler={function() {}}
      fileUrl=""
      file=""
      flags={{}}
    />)
    expect(toJson(tree)).toMatchSnapshot()
  })
});
