import React from 'react';
import PropTypes from 'prop-types';

import './linked-hint.css';

const LinkedHint = (props) => {
  return (
    <div className="catalog-settings-content__hint">
      Find more info in our guide <a href={props.link} className="catalog-settings-content__hint-link">here</a>.
    </div>
  );
};

LinkedHint.propTypes = {
  link: PropTypes.string.isRequired,
};

export default LinkedHint;
