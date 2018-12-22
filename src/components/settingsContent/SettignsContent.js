import React, { Component } from 'react';
import Title from './title/Title';
import InputField from './inputField/InputField';
import TextArea from './textArea/TextArea';
import Hint from './hint/Hint';
import Switch from './switch/Switch';
import UploadBlock from './uploadBlock/UploadBlock';

import Select from 'react-select';

import './settingsContent.css';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

export default class SettignContent extends Component {
  constructor(props) {
    super();
    const { data } = props;
    this.state = {
      title: data.title,
      description: data.description,
      defaultFallback: data.defaultFallback,
      hideVariants: data.hideVariants,
      defaultLanguage: null,
      additionalLanguages: null,
      fileUrl: data.fileUrl,
      file: data.file,
    };
  }

  componentDidMount() {
    window.addEventListener('SendForm', () => {
      this.props.getFormData(this.state);
    });
  }

  componentWillUnmount() {
    window.removeEventListener('SendForm');
  }

  checkboxHandler = (field) => {
    this.setState({[field]: !this.state[field]});
  }

  inputHandler = (field, value) => {
    this.setState({[field]: value});
  }

  handleChange = (defaultLanguage) => {
    this.setState({ defaultLanguage });
    console.log('Option selected:', defaultLanguage);
  }

  render() {
    const { title, description, defaultLanguage, defaultFallback, hideVariants } = this.state;

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
          <Select
            value={defaultLanguage}
            onChange={this.handleChange}
            options={options}
            isMulti={true}
            isSearchable={true}
          />
          <Hint text={'Please use only letters, numbers, underscores or hypens.'} />

          <div className="margin-top-30">
            <Title title={'Additional product languages in catalog'} />
            <Select
              value={defaultLanguage}
              onChange={this.handleChange}
              options={options}
              isMulti={true}
              isSearchable={true}
            />
          </div>

          <div className="catalog-settings-content__splitter margin-top-30">
            <Title title={'Fallback to default language of catalog when requested language is not available?'} />
            <Switch
              handlerCallBack={this.checkboxHandler}
              isChecked={defaultFallback}
              name={'defaultFallback'}
            />
          </div>

          <hr className="border-separator margin-top-30 margin-bot-30" />

          <UploadBlock />

          <hr className="border-separator margin-top-30 margin-bot-30" />

          <div className="catalog-settings-content__splitter margin-top-30">
            <Title title={'Do you want to hide product variants?'} />
            <Switch
              handlerCallBack={this.checkboxHandler}
              isChecked={hideVariants}
              name={'hideVariants'}
            />
          </div>
        </div>
      </div>
    );
  }
}
