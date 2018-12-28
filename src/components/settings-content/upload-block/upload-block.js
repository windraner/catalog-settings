import React from 'react';
import UploadLinkBlock from './upload-link-block/upload-link-block';
import UploadBlockSeparator from './upload-block-separator/upload-block-separator';
import UploadFileBlock from './upload-file-block/upload-file-block';
import PropTypes from 'prop-types';

const UploadBlock = (props) => {
  return (
    <div className="d-flex justify-content-between">
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
