import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './title.css';

export default class Title extends Component {
  render() {
    const { title, requred } = this.props;

    return (
      <div className="catalog-settings-content__input-title">
        {title}<span className="catalog-settings-content__input-title-star">{requred ? '*' : ''}</span>
      </div>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string,
  requred: PropTypes.bool
};
