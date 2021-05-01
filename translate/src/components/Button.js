import React from 'react';

import Language from '../contexts/language';
import Color from '../contexts/color';

class Button extends React.Component {
  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <Language.Consumer>
          {({ language }) => (language === 'english' ? 'Submit' : 'Vorlegen')}
        </Language.Consumer>
      </button>
    );
  }

  render() {
    return (
      <Color.Consumer>{(color) => this.renderButton(color)}</Color.Consumer>
    );
  }
}

export default Button;
