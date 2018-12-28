import React from 'react';
import PropTypes from 'prop-types';

import './text-area.css';

const TextArea = (props) => {
  return (
    <textarea
      value={props.value ? props.value : ''}
      onChange={(e) => props.onChange(props.name, e.target.value)}
      onBlur={(e) => props.onChange(props.name, e.target.value.trim())}
      type="text"
      className="catalog-settings-content__textarea d-block w-100 mt-1"
    />
  );
};

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextArea;
