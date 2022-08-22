import React from 'react';
import { ReactDOM } from 'react';

import Navigation from './components/Navigation/nav.component';

import './App.css';

const App = function () {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <p>hello world!</p>
    </div>
  );
};

export default App;
