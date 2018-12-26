import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './uploadButtonRemove.css';

export default class UploadButtonRemove extends Component {

  clickHandler = () => {
    this.props.inputHandler('file', '');
  }

  render() {
    const { text } = this.props;

    return (
      <div className="catalog-settings-content__remove-upload-button">
        <span>{text}</span>
        <span
          onClick={this.clickHandler}
          className="catalog-settings-content__upload-button-remove-icon"
        />
      </div>
    );
  }
}

UploadButtonRemove.propTypes = {
  inputHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
