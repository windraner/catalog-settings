import React from 'react';
import UploadLinkBlock from './uploadLinkBlock/UploadLinkBlock';
import UploadBlockSeparator from './uploadBlockSeparator/UploadBlockSeparator';
import UploadFileBlock from './uploadFileBlock/UploadFileBlock';
import PropTypes from 'prop-types';

import './uploadBlock.css';

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
