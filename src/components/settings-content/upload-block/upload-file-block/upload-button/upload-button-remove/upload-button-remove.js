import React from 'react';
import PropTypes from 'prop-types';

import './upload-button-remove.css';

const UploadButtonRemove = (props) => {
  return (
    <div className="catalog-settings-content__remove-upload-button pl-3 d-flex justify-content-between">
      <span>{props.text}</span>
      <span
        onClick={() => props.inputHandler('file', '')}
        className="catalog-settings-content__upload-button-remove-icon px-3"
      />
    </div>
  );
};

UploadButtonRemove.propTypes = {
  inputHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default UploadButtonRemove;
