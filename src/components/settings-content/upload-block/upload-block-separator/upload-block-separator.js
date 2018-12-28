import React from 'react';

import './upload-block-separator.css';

 const UploadBlockSeparator = () => {
  return (
    <div className="catalog-settings-content__upload-separator">
      <div className="catalog-settings-content__upload-separator-border mx-auto my-0"></div>
      <div className="catalog-settings-content__upload-separator-text">OR</div>
      <div className="catalog-settings-content__upload-separator-border mx-auto my-0"></div>
    </div>
  );
};

export default UploadBlockSeparator;
