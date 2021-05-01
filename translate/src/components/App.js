import React from 'react';

import LanguageSelector from './LanguageSelector';
import UserCreate from './UserCreate';

import Color from '../contexts/color';
import { LanguageStore } from '../contexts/language';

class App extends React.Component {
  state = {
    color: 'red',
  };

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <Color.Provider value={this.state.color}>
            <UserCreate />
          </Color.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
