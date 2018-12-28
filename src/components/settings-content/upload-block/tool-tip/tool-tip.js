import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './tool-tip.css';

export default class ToolTip extends Component {
  render() {
    const { text, isShow } = this.props;

    if(!isShow) {
      return null;
    }

    return (
      <div className="catalog-settings-content__upload-tool-tip position-absolute">
        {text}
      </div>
    );
  }
}

ToolTip.propTypes = {
  text: PropTypes.string.isRequired,
  isShow: PropTypes.bool.isRequired,
};
