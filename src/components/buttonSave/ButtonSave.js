import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

ButtonSave.propTypes = {
  handlerCallBack: PropTypes.func.isRequired
};
