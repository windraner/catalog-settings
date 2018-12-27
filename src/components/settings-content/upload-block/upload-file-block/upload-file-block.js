import React from 'react';
import Title from '../../title/title';
import Hint from '../../hint/hint';
import LinkedHint from '../linkedHint/linked-hint';
import UploadButton from './uploadButton/UploadButton';
import PropTypes from 'prop-types';

const UploadFileBlock = (props) => {
  return (
    <div>
      <Title title={'Direct upload of products CSV file'} />

      <Hint text={'Here you can bulk upload products data using a products CSV file.'}
      />

      <div className="margin-top-20">
        <UploadButton
          {...props}
        />
      </div>

      <div className="margin-top-20">
        <LinkedHint
          link={'#'}
        />
      </div>
    </div>
  );
};

UploadFileBlock.propTypes = {
  inputHandler: PropTypes.func.isRequired,
  fileUrl: PropTypes.string.isRequired,
  file: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  flags: PropTypes.object,
};

export default UploadFileBlock;
