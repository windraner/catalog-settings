import React, { Component } from 'react';
import UploadLinkBlock from './uploadLinkBlock/UploadLinkBlock';
import UploadBlockSeparator from './uploadBlockSeparator/UploadBlockSeparator';
import UploadFileBlock from './uploadFileBlock/UploadFileBlock';
import PropTypes from 'prop-types';

import './uploadBlock.css';

export default class UploadBlock extends Component {
  render() {
    const { flags } = this.props;

    return (
      <div className="catalog-settings-content__upload-block">
        <UploadLinkBlock
          {...this.props}
        />
        {
          flags.canUploadFile ?
            <UploadBlockSeparator />
            :
            null
        }
        {
          flags.canUploadFile ?
            <UploadFileBlock
              {...this.props}
            />
            :
            null
        }
      </div>
    );
  }
}

UploadBlock.propTypes = {
  inputHandler: PropTypes.func.isRequired,
  fileUrl: PropTypes.string.isRequired,
  file: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  flags: PropTypes.object,
};
