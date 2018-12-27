import React from 'react';
import PropTypes from 'prop-types';

import './switch.css';

 const Switch = (props) => {
  return (
    <label className="catalog-settings-content__switch-label">
      <input
        checked={props.isChecked}
        type="checkbox"
        className="catalog-settings-content__switch-input"
        onChange={() => props.handlerCallBack(props.name)}
      />
      <span className="catalog-settings-content__switch-text">{props.isChecked ? 'On' : 'Off'}</span>
    </label>
  );
};

Switch.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  handlerCallBack: PropTypes.func.isRequired
};

export default Switch;
