import React, { Component } from 'react';
import Select from 'react-select';
import {
  IndicatorsContainer,
  Control,
  MultiValueContainer,
  MultiValueLabel,
  MultiValueRemove
} from '../commonComponents/CommonComponents';
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
    const { defaultLanguage, languages } = this.props;

    return (
      <Select
        value={defaultLanguage ? {value: defaultLanguage, label: defaultLanguage} : ''}
        onChange={this.handleChange}
        options={createSelectOptions(languages)}
        isMulti={true}
        isSearchable={true}
        placeholder={''}
        styles={{
          menu: (base) => ({ ...base, margin: 0}),
          menuList: (base) => ({ ...base, fontSize: '1.4em', fontWeight: 600 }),
          valueContainer: (base) => ({ ...base, paddingLeft: 0, height: '100%' }),
          input: (base) => ({ ...base, fontSize: '1.4em' }),
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
