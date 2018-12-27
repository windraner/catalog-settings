import React from 'react';
import UploadLinkBlock from './upload-link-block/UploadLinkBlock';
import UploadBlockSeparator from './upload-block-separator/UploadBlockSeparator';
import UploadFileBlock from './upload-file-block/UploadFileBlock';
import PropTypes from 'prop-types';

import './upload-block.css';

const UploadBlock = (props) => {
  return (
    <div className="catalog-settings-content__upload-block">
      <UploadLinkBlock
        {...props}
      />

      <UploadBlockSeparator />

      <UploadFileBlock
        {...props}
      />
    </div>
  );
};

UploadBlock.propTypes = {
  inputHandler: PropTypes.func.isRequired,
  fileUrl: PropTypes.string.isRequired,
  file: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  flags: PropTypes.object,
};

export default UploadBlock;
