import React, { Component } from 'react';

import './inputTextArea.css';

export default class TextArea extends Component {
  changeHandler = (e) => {
    const { name } = this.props;
    this.props.onChange(name, e.target.value);
  }

  blurHandler = (e) => {
    const { name } = this.props;
    this.props.onChange(name, e.target.value.trim());
  }

  render() {
    const { value } = this.props;

    return (
      <textarea
        value={value ? value : ''}
        onChange={this.changeHandler}
        onBlur={this.blurHandler}
        type="text"
        className="catalog-settings-content__textarea"
      />
    );
  }
}
