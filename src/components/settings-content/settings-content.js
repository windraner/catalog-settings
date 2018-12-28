import React, { Component, Fragment } from 'react';
import Title from './title/title';
import InputField from './input-field/input-field';
import TextArea from './text-area/text-area';
import Hint from './hint/hint';
import Switch from './switch/switch';
import UploadBlock from './upload-block/upload-block';
import DefaultProductLanguage from './select/default-product-language/default-product-language';
import AdditionalProductLanguage from './select/additional-product-language/additional-product-language';
import PropTypes from 'prop-types';

import './settings-content.css';

export default class SettingsContent extends Component {
  constructor(props) {
    super();
    const { data } = props;
    this.state = {
      title: data.title,
      description: data.description,
      defaultFallback: data.defaultFallback,
      hideVariants: data.hideVariants,
      defaultLanguage: data.defaultLanguage,
      additionalLanguages: data.additionalLanguages,
      fileUrl: data.fileUrl,
      file: data.file,
    };
  }

  componentDidMount() {
    window.addEventListener('SendForm', this.eventFunction);
  }

  componentWillUnmount() {
    window.removeEventListener('SendForm', this.eventFunction);
  }

  eventFunction = () => {
    this.props.getFormData(this.state);
  }

  checkboxHandler = (field) => {
    this.setState({[field]: !this.state[field]});
  }

  inputHandler = (field, value) => {
    this.setState({[field]: value});
  }

  renderDefaultLanguageSwitcher = () => {
    const { defaultLanguage, defaultFallback } = this.state;

    if(defaultLanguage) {
      return (
        <div className="d-flex justify-content-between margin-top-30">
          <Title title={'Fallback to default language of catalog when requested language is not available?'} />
          <Switch
            handlerCallBack={this.checkboxHandler}
            isChecked={defaultFallback}
            name={'defaultFallback'}
          />
        </div>
      );
    }

    return null;
  }

  renderUploadBlock = () => {
    const { flags } = this.props;
    const { fileUrl, file  } = this.state;

    if(flags.canUploadFile) {
      return (
        <Fragment>
          <hr className="border-separator margin-top-30 margin-bot-30" />

          <UploadBlock
            inputHandler={this.inputHandler}
            fileUrl={fileUrl}
            file={file}
            flags={flags}
          />
        </Fragment>
      );
    }
    return null;
  }

  renderHideVariants = () => {
    const { flags } = this.props;
    const { hideVariants } = this.state;

    if(flags.canHideVariants) {
      return (
        <Fragment>
          <hr className="border-separator margin-top-30 margin-bot-30" />
          <div className="d-flex justify-content-between margin-top-30">
            <Title title={'Do you want to hide product variants?'} />
            <Switch
              handlerCallBack={this.checkboxHandler}
              isChecked={hideVariants}
              name={'hideVariants'}
            />
          </div>
        </Fragment>
      );
    }

    return null;
  }

  render() {
    const { languages } = this.props;
    const { title, description, defaultLanguage, additionalLanguages, defaultFallback } = this.state;

    return (
      <div className="catalog-settings-content mx-auto margin-top-35">
        <div className="catalog-settings-content__wrapper">
          <Title
            title={'Title'}
            required={true}
          />
          <InputField
            value={title}
            name={'title'}
            onChange={this.inputHandler}
            required={true}
          />

          <div className="margin-top-30">
            <Title title={'Description'} />
            <TextArea
              value={description}
              name={'description'}
              onChange={this.inputHandler}
            />
          </div>
        </div>

        <hr className="border-separator margin-top-30 margin-bot-30" />

        <div className="catalog-settings-content__wrapper">
          <Title title={'Default product language'} required={true} />
          <DefaultProductLanguage
            defaultFallback={defaultFallback}
            defaultLanguage={defaultLanguage}
            languages={languages}
            inputHandler={this.inputHandler}
          />
          {
            !defaultLanguage ?
              <div className="catalog-settings-content__error-message mt-1">Can not be empty</div>
              :
              null
          }
          <Hint text={'Please use only letters, numbers, underscores or hypens.'} />

          <div className="margin-top-30">
            <Title title={'Additional product languages in catalog'} />
            <AdditionalProductLanguage
              additionalLanguages={additionalLanguages}
              languages={languages}
              inputHandler={this.inputHandler}
            />
          </div>

          {this.renderDefaultLanguageSwitcher()}

          {this.renderUploadBlock()}

          {this.renderHideVariants()}
        </div>
      </div>
    );
  }
}

SettingsContent.propTypes = {
  data: PropTypes.object.isRequired,
  flags: PropTypes.object.isRequired,
  languages: PropTypes.array.isRequired,
  getFormData: PropTypes.func.isRequired,
};
