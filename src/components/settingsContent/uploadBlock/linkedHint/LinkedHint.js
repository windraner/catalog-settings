import React, { Component } from 'react';

import './linkedHint.css';

export default class LinkedHint extends Component {
  render() {
    const { link } = this.props;

    return (
      <div className="catalog-settings-content__hint">
        Find more info in our guide <a href={link} className="catalog-settings-content__hint-link">here</a>.
      </div>
    );
  }
}
