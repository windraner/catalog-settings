import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

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

  renderError = () => {
    const { required } = this.props;
    const { isValidated } = this.state;
    if(required && isValidated) {
      return (<div className="catalog-settings-content__error-message">Can not be empty</div>);
    }
    return null;
  }

  render() {
    const { value, required } = this.props;
    const { isValidated } = this.state;
    const className = (required && isValidated ?
      'catalog-settings-content__input-field catalog-settings-content__input-field_error'
      :
      'catalog-settings-content__input-field');

    return (
      <Fragment>
        <input
          value={value ? value : ''}
          onChange={this.changeHandler}
          onBlur={this.blurHandler}
          type="text"
          className={className}
        />
        {this.renderError()}
      </Fragment>
    );
  }
}

InputField.propTypes = {
  value: PropTypes.string,
  required: PropTypes.bool
};
