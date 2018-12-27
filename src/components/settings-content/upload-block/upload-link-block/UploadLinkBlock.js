import React from 'react';
import Title from '../../title/title';
import Hint from '../../hint/hint';
import LinkInput from './linkInput/LinkInput';
import LinkedHint from '../linkedHint/linked-hint';
import PropTypes from 'prop-types';

import './uploadLinkBlock.css';

const UploadLinkBlock = (props) => {
  return (
    <div className="catalog-settings-content__upload-link-block">
      <Title title={'URL of remote products CSV source'} />

      <Hint text={
        'Photoslurp will periodically fetch the products data from the given source' +
        'and automatically update the products of this catalog if you submit the source URL here:'
        }
      />

      <div className="margin-top-20">
        <LinkInput
          {...props}
          placeholder={'http://mysite.com/patch/to/CSV/source.csv'}
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

UploadLinkBlock.propTypes = {
  inputHandler: PropTypes.func.isRequired,
  fileUrl: PropTypes.string.isRequired,
  file: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  flags: PropTypes.object,
};

export default UploadLinkBlock;
