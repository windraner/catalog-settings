import React from 'react';
import PropTypes from 'prop-types';

import './title.css';

const Title = (props) => {
  return (
    <div className="catalog-settings-content__input-title">
      {props.title}<span className="catalog-settings-content__input-title-star">{props.required ? '*' : ''}</span>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  required: PropTypes.bool
};

export default Title;
