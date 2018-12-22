import React, { Component } from 'react';

import './uploadBlockSeparator.css';

export default class UploadBlockSeparator extends Component {
  render() {
    return (
      <div className="catalog-settings-content__upload-separator">
        <div className="catalog-settings-content__upload-separator-border"></div>
        <div className="catalog-settings-content__upload-separator-text">OR</div>
        <div className="catalog-settings-content__upload-separator-border"></div>
      </div>
    );
  }
}
