import React from 'react';

import './common-components.css';

export const IndicatorsContainer = () => {
  return null;
};

export const Control = (props) => {
  return (
    <div
      onMouseDown={props.innerProps.onMouseDown}
      className="catalog-settings-content__select-control"
      style={!props.hasValue ? {borderColor: '#ed1c24'} : null}
    >
      {props.children}
    </div>
  );
};

export const ControlWithoutValidation = (props) => {
  return (
    <div
      onMouseDown={props.innerProps.onMouseDown}
      className="catalog-settings-content__select-control"
    >
      {props.children}
    </div>
  );
};

export const MultiValueContainer = (props) => {
  return (
    <div className="catalog-settings-content__select-value-container">
      {props.children}
    </div>
  );
};

export const MultiValueLabel = (props) => {
  return (
    <div className="catalog-settings-content__select-value-label">
      {props.children}
    </div>
  );
};

export const MultiValueRemove = (props) => {
  return (
    <div
      className="catalog-settings-content__select-value-remove"
      onClick={props.innerProps.onClick}
    >
      ×
    </div>
  );
};
