import React, { Component } from 'react';

import './linkInput.css';

export default class LinkInput extends Component {
  render() {
    return (
      <input
        // value={value ? value : ''}
        // onChange={this.changeHandler}
        // onBlur={this.blurHandler}
        type="text"
        className="catalog-settings-content__link-input"
      />
    );
  }
}
