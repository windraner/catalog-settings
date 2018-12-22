import React, { Component } from 'react';

import './buttonSave.css';

export default class ButtonSave extends Component {
  render() {
    const { handlerCallBack } = this.props;

    return (
      <div
        onClick={handlerCallBack}
        className="catalog-settings__save-button"
      >
        Save settings
      </div>
    );
  }
}
