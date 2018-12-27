import React from 'react';
import PropTypes from 'prop-types';

import './buttonSave.css';

const ButtonSave = (props) => {
  return (
    <div
      onClick={props.handlerCallBack}
      className="catalog-settings__save-button"
    >
      Save settings
    </div>
  );
};

ButtonSave.propTypes = {
  handlerCallBack: PropTypes.func.isRequired
};

export default ButtonSave;
