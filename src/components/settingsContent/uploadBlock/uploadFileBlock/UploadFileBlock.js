import React, { Component } from 'react';
import Title from '../../title/Title';
import Hint from '../../hint/Hint';
import LinkedHint from '../linkedHint/LinkedHint';
import UploadButton from './uploadButton/UploadButton';

export default class UploadFileBlock extends Component {
  render() {
    return (
      <div>
        <Title title={'Direct upload of products CSV file'} />

        <Hint text={'Here you can bulk upload products data using a products CSV file.'}
        />

        <div className="margin-top-20">
          <UploadButton />
        </div>

        <div className="margin-top-20">
          <LinkedHint
            link={'#'}
          />
        </div>
      </div>
    );
  }
}
