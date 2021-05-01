import React from 'react';

import Language from '../contexts/language';

class LanguageSelector extends React.Component {
  static contextType = Language;

  render() {
    console.log(this.context);
    return (
      <div>
        Select a Language:
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange('english')}
        />
        <i
          className="flag de"
          onClick={() => this.context.onLanguageChange('german')}
        />
      </div>
    );
  }
}

export default LanguageSelector;
