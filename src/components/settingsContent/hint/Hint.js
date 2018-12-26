import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './hint.css';

export default class Hint extends Component {
  render() {
    const { text } = this.props;

    return (
      <div className="catalog-settings-content__hint">
        {text}
      </div>
    );
  }
}

Hint.propTypes = {
  text: PropTypes.string,
};
