import React, { Component } from 'react';
import UploadLinkBlock from './uploadLinkBlock/UploadLinkBlock';
import UploadBlockSeparator from './uploadBlockSeparator/UploadBlockSeparator';
import UploadFileBlock from './uploadFileBlock/UploadFileBlock';

import './uploadBlock.css';

export default class UploadBlock extends Component {
  render() {
    return (
      <div className="catalog-settings-content__upload-block">
        <UploadLinkBlock />
        <UploadBlockSeparator />
        <UploadFileBlock />
      </div>
    );
  }
}
