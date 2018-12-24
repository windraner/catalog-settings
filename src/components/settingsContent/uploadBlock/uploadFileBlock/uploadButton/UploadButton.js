import React, { Component } from 'react';
import DisabledUploadButton from './disabledUploadButton/DisabledUploadButton';
import UploadButtonRemove from './uploadButtonRemove/UploadButtonRemove';

import './uploadButton.css';

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
      <label htmlFor="upload_doc" className="catalog-settings-content__upload-button">
        <span className="catalog-settings-content__upload-button-icon"></span>
        <span>Upload file</span>
        <input
          accept=".csv"
          onChange={this.changeHandler}
          id="upload_doc"
          type="file"
          className="catalog-settings-content__upload-input"
        />
      </label>
    );
  }
}
