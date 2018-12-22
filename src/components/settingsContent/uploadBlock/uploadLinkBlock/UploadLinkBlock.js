import React, { Component } from 'react';
import Title from '../../title/Title';
import Hint from '../../hint/Hint';
import LinkInput from './linkInput/LinkInput';
import LinkedHint from '../linkedHint/LinkedHint';

import './uploadLinkBlock.css';

export default class UploadLinkBlock extends Component {
  render() {
    return (
      <div className="catalog-settings-content__upload-link-block">
        <Title title={'URL of remote products CSV source'} />

        <Hint text={
          'Photoslurp will periodically fetch the products data from the given source' +
          'and automatically update the products of this catalog if you submit the source URL here:'
          }
        />

        <div className="margin-top-20">
          <LinkInput />
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
