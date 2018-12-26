import React, { Component } from 'react';
import Select from 'react-select';
import {
  IndicatorsContainer,
  ControlWithoutValidation,
  MultiValueContainer,
  MultiValueLabel,
  MultiValueRemove
} from '../commonComponents/CommonComponents';
import PropTypes from 'prop-types';

import { createSelectOptions } from '../../../../utils/index';

export default class AdditionalProductLanguage extends Component {

  handleChange = (pickedLanguage) => {
    const newPickedLanguage = pickedLanguage.map((item) => {
      return item.value;
    });
    this.props.inputHandler('additionalLanguages', newPickedLanguage);
  }

  render() {
    const { additionalLanguages, languages } = this.props;

    return (
      <Select
        value={createSelectOptions(additionalLanguages)}
        onChange={this.handleChange}
        options={createSelectOptions(languages)}
        isMulti={true}
        isSearchable={true}
        placeholder={''}
        styles={{
          menu: (base) => ({ ...base, margin: 0}),
          menuList: (base) => ({ ...base, fontSize: '1.4em', fontWeight: 600 }),
          valueContainer: (base) => ({ ...base, paddingLeft: 0, height: '100%' }),
        }}
        components={{
          Control: ControlWithoutValidation,
          IndicatorsContainer,
          MultiValueContainer,
          MultiValueLabel,
          MultiValueRemove,
        }}
      />
    );
  }
}

AdditionalProductLanguage.propTypes = {
  additionalLanguages: PropTypes.array.isRequired,
  languages: PropTypes.array.isRequired,
  inputHandler: PropTypes.func.isRequired
};
