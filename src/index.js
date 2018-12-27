import React from 'react';
import ReactDOM from 'react-dom';
import SettingsComponent from './settings-component';

import './index.css';

const data = {
  title: 'Catalog title',
  description: 'Catalog description',
  defaultLanguage: 'en',
  additionalLanguages: ['es', 'ru'],
  defaultFallback: true,
  fileUrl: '',
  file: '',
  hideVariants: false
};

const cancelCallback = () => {
  // console.log('cancelCallback');
};

const saveCallback = (newData) => {
  console.log('saveCallback', newData);
};

ReactDOM.render(
  <SettingsComponent
    data={data}
    languages={['en', 'es', 'ru', 'de']}
    flags={{
      canUploadFile: true,
      canHideVariants: true
    }}
    onSave={saveCallback}
    onCancel={cancelCallback}
  />, document.getElementById('root'));
