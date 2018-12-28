import React, { Component } from 'react';
import GeneralTitle from './components/general-title/general-title';
import SettingsContent from './components/settings-content/settings-content';
import ButtonCancel from './components/button-cancel/button-cancel';
import ButtonSave from './components/button-save/button-save';
import PropTypes from 'prop-types';

import './catalog-settings.css';

export default class SettingsComponent extends Component {
  state = {
    newData: {}
  }

  getFormData = (data) => {
    this.setState({newData: data});
  }

  onSaveCallback = () => {
    const event = new Event('SendForm');
    window.dispatchEvent(event);
    setTimeout(() => {
      const {title, defaultLanguage} = this.state.newData;

      if(!title || !defaultLanguage) {return;}

      this.props.onSave(this.state.newData);
    }, 0);
  }

  onCancelCallback = () => {
    this.props.onCancel();
  }

  render() {
    const { data, flags, languages } = this.props;

    return (
      <div>
        <GeneralTitle />

        <SettingsContent
          data={data}
          flags={flags}
          languages={languages}
          getFormData={this.getFormData}
        />

        <div className="catalog-settings__splitter d-flex justify-content-between mx-auto margin-top-30 margin-bot-30">
          <ButtonCancel
            handlerCallBack={this.onCancelCallback}
          />
          <ButtonSave
            handlerCallBack={this.onSaveCallback}
          />
        </div>
      </div>
    );
  }
}

SettingsComponent.propTypes = {
  data: PropTypes.object.isRequired,
  flags: PropTypes.object.isRequired,
  languages: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
