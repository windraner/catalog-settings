import React, { Component, Fragment } from 'react';
import Title from './title/Title';
import InputField from './inputField/InputField';
import TextArea from './textArea/TextArea';
import Hint from './hint/Hint';
import Switch from './switch/Switch';
import UploadBlock from './uploadBlock/UploadBlock';
import DefaultProductLanguage from './select/defaultProductLanguage/DefaultProductLanguage';
import AdditionalProductLanguage from './select/additionalProductLanguage/AdditionalProductLanguage';
import PropTypes from 'prop-types';

import './settingsContent.css';

export default class SettignsContent extends Component {
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
        <div className="catalog-settings-content__splitter margin-top-30">
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

  renderHideVariants = () => {
    const { flags } = this.props;
    const { hideVariants } = this.state;

    if(flags.canHideVariants) {
      return (
        <Fragment>
          <hr className="border-separator margin-top-30 margin-bot-30" />
          <div className="catalog-settings-content__splitter margin-top-30">
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
    const { flags, languages } = this.props;
    const { title, description, defaultLanguage, additionalLanguages, fileUrl, file  } = this.state;

    return (
      <div className="catalog-settings-content margin-left-auto margin-right-auto margin-top-35">
        <div className="catalog-settings-content__wrapper">
          <Title
            title={'Title'}
            requred={true}
          />
          <InputField
            value={title}
            name={'title'}
            onChange={this.inputHandler}
            requred={true}
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
          <Title title={'Default product language'} requred={true} />
          <DefaultProductLanguage
            defaultLanguage={defaultLanguage}
            languages={languages}
            inputHandler={this.inputHandler}
          />
          {
            !defaultLanguage ?
              <div className="catalog-settings-content__error-message">Can not be empty</div>
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

          <hr className="border-separator margin-top-30 margin-bot-30" />

          <UploadBlock
            inputHandler={this.inputHandler}
            fileUrl={fileUrl}
            file={file}
            flags={flags}
          />

          {this.renderHideVariants()}
        </div>
      </div>
    );
  }
}

SettignsContent.propTypes = {
  data: PropTypes.object.isRequired,
  flags: PropTypes.object.isRequired,
  languages: PropTypes.array.isRequired,
  getFormData: PropTypes.func.isRequired,
};
