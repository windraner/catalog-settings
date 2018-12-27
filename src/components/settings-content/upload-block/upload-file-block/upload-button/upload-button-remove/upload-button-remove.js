import React from 'react';
import PropTypes from 'prop-types';

import './upload-button-remove.css';

const UploadButtonRemove = (props) => {
  return (
    <div className="catalog-settings-content__remove-upload-button">
      <span>{props.text}</span>
      <span
        onClick={() => props.inputHandler('file', '')}
        className="catalog-settings-content__upload-button-remove-icon"
      />
    </div>
  );
};

UploadButtonRemove.propTypes = {
  inputHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default UploadButtonRemove;
