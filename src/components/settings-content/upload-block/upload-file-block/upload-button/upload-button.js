import React, { Component } from 'react';
import DisabledUploadButton from './disabled-upload-button/disabled-upload-button';
import UploadButtonRemove from './upload-button-remove/upload-button-remove';
import PropTypes from 'prop-types';

import './upload-button.css';

export default class UploadButton extends Component {
  changeHandler = (e) => {
    this.props.inputHandler('file', e.target.files[0]);
  }

  render() {
    const { file, fileUrl, inputHandler } = this.props;

    if(file) {
      return (
        <UploadButtonRemove
          inputHandler={inputHandler}
          text={file.name}
        />
      );
    }

    if(fileUrl) {
      return (
        <DisabledUploadButton />
      );
    }

    return (
      <label htmlFor="upload_doc" className="catalog-settings-content__upload-button position-relative d-flex justify-content-center">
        <span className="catalog-settings-content__upload-button-icon"></span>
        <span>Upload file</span>
        <input
          accept=".csv"
          onChange={this.changeHandler}
          id="upload_doc"
          type="file"
          className="d-none"
        />
      </label>
    );
  }
}

UploadButton.propTypes = {
  inputHandler: PropTypes.func.isRequired,
  fileUrl: PropTypes.string.isRequired,
  file: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  flags: PropTypes.object,
};
