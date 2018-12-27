import React from 'react';
import PropTypes from 'prop-types';

import './hint.css';

 const Hint = (props) => {
    return (
      <div className="catalog-settings-content__hint">
        {props.text}
      </div>
    );
};

Hint.propTypes = {
  text: PropTypes.string,
};

export default Hint;
