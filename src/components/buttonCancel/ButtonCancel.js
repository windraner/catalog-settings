import React, { Component } from 'react';

import './buttonCancel.css';

export default class ButtonCancel extends Component {
  render() {
    const { handlerCallBack } = this.props;

    return (
      <div
        onClick={handlerCallBack}
        className="catalog-settings__cancel-button"
      >
        Cancel
      </div>
    );
  }
}
