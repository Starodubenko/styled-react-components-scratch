import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import logo from './logo.svg';
import { AuthForm } from './components';
import { theme } from './theme';
import { LIGHT_STYLE, STYLE_MODE, DARK_STYLE } from './ui-kit';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="App__AuthFormContainer">
          <ThemeProvider theme={{ [STYLE_MODE]: LIGHT_STYLE, ...theme }}>
            <AuthForm />
          </ThemeProvider>
        </div>
      </div>
    );
  }
}

export default App;
