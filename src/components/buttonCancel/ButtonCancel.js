import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

ButtonCancel.propTypes = {
  handlerCallBack: PropTypes.func.isRequired
};
