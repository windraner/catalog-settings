import React, { Component } from 'react';
import ToolTip from '../../../toolTip/ToolTip';

export default class DisabledUploadButton extends Component {
  state = {
    isTooltipShow: false
  }

  hoverHandler = (value) => {
    this.setState({isTooltipShow: value});
  }

  render() {
    const { isTooltipShow } = this.state;

    return (
      <div
        onMouseEnter={() => this.hoverHandler(true)}
        onMouseLeave={() => this.hoverHandler(false)}
        className="catalog-settings-content__upload-button catalog-settings-content__upload-button_disabled"
      >
        <ToolTip
          isShow={isTooltipShow}
          text={'Remove URL to manually add CSV file'}
        />
        <span className="catalog-settings-content__upload-button-icon"></span>
        <span>Upload file</span>
      </div>
    );
  }
}
