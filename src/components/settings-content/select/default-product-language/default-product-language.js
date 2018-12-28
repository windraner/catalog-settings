import React, { Component } from 'react';
import Select from 'react-select';
import {
  IndicatorsContainer,
  Control,
  MultiValueContainer,
  MultiValueLabel,
  MultiValueRemove
} from '../common-components/common-components';
import PropTypes from 'prop-types';

import { createSelectOptions } from '../../../../utils/index';

export default class DefaultProductLanguage extends Component {

  handleChange = (pickedLanguage) => {
    const newPickedLanguage = pickedLanguage.find((item) => {
      if(item.value !== this.props.defaultLanguage) {
        return item;
      }
    });

    const value = newPickedLanguage ? newPickedLanguage.value : '';

    this.props.inputHandler('defaultLanguage', value);
  }

  render() {
    const { defaultFallback, defaultLanguage, languages } = this.props;

    return (
      <Select
        className="mt-1"
        defaultFallback={defaultFallback}
        value={defaultLanguage ? {value: defaultLanguage, label: defaultLanguage} : ''}
        onChange={this.handleChange}
        options={createSelectOptions(languages)}
        isMulti={true}
        isSearchable={true}
        placeholder={''}
        styles={{
          menu: (base) => ({ ...base, margin: 0}),
          menuList: (base) => ({ ...base, fontSize: '1rem', fontWeight: 600 }),
          valueContainer: (base) => ({ ...base, paddingLeft: 0, height: '100%' }),
          input: (base) => ({ ...base, fontSize: '1rem' }),
        }}
        components={{
          Control,
          IndicatorsContainer,
          MultiValueContainer,
          MultiValueLabel,
          MultiValueRemove,
        }}
      />
    );
  }
}

DefaultProductLanguage.propTypes = {
  defaultLanguage: PropTypes.string.isRequired,
  languages: PropTypes.array.isRequired,
  inputHandler: PropTypes.func.isRequired
};
