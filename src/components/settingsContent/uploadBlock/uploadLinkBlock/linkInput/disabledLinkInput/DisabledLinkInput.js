import React, { Component } from 'react';
import ToolTip from '../../../toolTip/ToolTip';

import './disabledLinkInput.css';

export default class DisabledLinkInput extends Component {
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
        className="catalog-settings-content__link-input catalog-settings-content__link-input_disabled"
      >
        <div className="catalog-settings-content__tooltip-wrapper">
          <ToolTip
            isShow={isTooltipShow}
            text={'Remove uploaded file to add link to CSV source file'}
          />
        </div>
        http://mysite.com/patch/to/CSV/source.csv
      </div>
    );
  }
}
