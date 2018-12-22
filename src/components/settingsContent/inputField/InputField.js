import React, { Component } from 'react';

import './inputField.css';

export default class InputField extends Component {
  state={
    isValidated: false,
  }

  changeHandler = (e) => {
    const { name } = this.props;
    this.props.onChange(name, e.target.value);
    if(e.target.value.trim()) {
      this.setState({isValidated: false});
    }
  }

  blurHandler = (e) => {
    const { name } = this.props;
    this.props.onChange(name, e.target.value.trim());
    if(!e.target.value.trim()) {
      this.setState({isValidated: true});
    }
  }

  render() {
    const { value, requred } = this.props;
    const { isValidated } = this.state;
    const error = requred && isValidated;

    return (
      <input
        value={value ? value : ''}
        onChange={this.changeHandler}
        onBlur={this.blurHandler}
        type="text"
        className={
          error ?
            'catalog-settings-content__input-field catalog-settings-content__input-field_error'
            :
            'catalog-settings-content__input-field'
        }
      />
    );
  }
}
