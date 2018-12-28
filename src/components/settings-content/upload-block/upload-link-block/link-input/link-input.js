import React, { Component } from 'react';
import DisabledLinkInput from './disabled-link-input/disabled-link-input';
import PropTypes from 'prop-types';

import './link-input.css';

export default class LinkInput extends Component {

  changeHandler = (e) => {
    this.props.inputHandler('fileUrl', e.target.value.trim());
  }

  clearHandler = () => {
    this.props.inputHandler('fileUrl', '');
  }

  render() {
    const { placeholder, fileUrl, file } = this.props;

    if(file) {
      return (
        <DisabledLinkInput />
      );
    }

    return (
      <div className="position-relative">
        <input
          value={fileUrl ? fileUrl : ''}
          onChange={this.changeHandler}
          type="text"
          placeholder={placeholder}
          className="catalog-settings-content__link-input d-block w-100"
        />
        {
          fileUrl ?
            <span
              className="catalog-settings-content__link-input-clear position-absolute m-auto"
              onClick={this.clearHandler}
            />
            :
            null
          }
      </div>
    );
  }
}

LinkInput.propTypes = {
  placeholder: PropTypes.string,
  inputHandler: PropTypes.func.isRequired,
  fileUrl: PropTypes.string.isRequired,
  file: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  flags: PropTypes.object,
};
