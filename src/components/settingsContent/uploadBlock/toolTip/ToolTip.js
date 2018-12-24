import React, { Component } from 'react';

import './toolTip.css';

export default class ToolTip extends Component {
  render() {
    const { text, isShow } = this.props;

    if(!isShow) {
      return null;
    }

    return (
      <div className="catalog-settings-content__upload-tool-tip">
        {text}
      </div>
    );
  }
}
