import React, { Component } from 'react';
import Select from 'react-select';
import {
  IndicatorsContainer,
  ControlWithoutValidation,
  MultiValueContainer,
  MultiValueLabel,
  MultiValueRemove
} from '../common-components/common-components';
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
        className="mt-1"
        value={createSelectOptions(additionalLanguages)}
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
