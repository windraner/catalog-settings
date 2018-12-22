import React, { Component } from 'react';

import './switch.css';

export default class Switch extends Component {
  changeHandler = () => {
    const { name } = this.props;
    this.props.handlerCallBack(name);
  }

  render() {
    const { isChecked } = this.props;

    return (
      <label className="catalog-settings-content__switch-label">
        <input
          checked={isChecked}
          type="checkbox"
          className="catalog-settings-content__switch-input"
          onChange={this.changeHandler}
        />
        <span className="catalog-settings-content__switch-text">{isChecked ? 'On' : 'Off'}</span>
      </label>
    );
  }
}
