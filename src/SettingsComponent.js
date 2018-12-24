import React, { Component } from 'react';
import Title from './components/title/Title';
import SettignsContent from './components/settingsContent/SettignsContent';
import ButtonCancel from './components/buttonCancel/ButtonCancel';
import ButtonSave from './components/buttonSave/ButtonSave';

import './catalogSettings.css';

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
    setTimeout(() => this.props.onSave(this.state.newData), 0);
  }

  onCancelCallback = () => {
    this.props.onCancel();
  }

  render() {
    // console.log(this.props);
    const { data, flags, languages } = this.props;
    return (
      <div>
        <Title />

        <SettignsContent
          data={data}
          flags={flags}
          languages={languages}
          getFormData={this.getFormData}
        />

        <div className="catalog-settings__splitter margin-left-auto margin-right-auto margin-top-30 margin-bot-30">
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
