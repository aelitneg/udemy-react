import React from 'react';

import Language from '../contexts/language';

class Field extends React.Component {
  static contextType = Language;

  render() {
    const text = this.context.language === 'english' ? 'First Name' : 'Vorname';
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
