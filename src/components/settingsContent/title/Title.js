import React from 'react';
import PropTypes from 'prop-types';

import './title.css';

const Title = (props) => {
  return (
    <div className="catalog-settings-content__input-title">
      {props.title}<span className="catalog-settings-content__input-title-star">{props.requred ? '*' : ''}</span>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  requred: PropTypes.bool
};

export default Title;
