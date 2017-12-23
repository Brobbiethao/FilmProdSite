import React, { Component } from 'react';
import LogoComponent from '../src/components/header/Logo'
import NavBarComponent from '../src/components/navbar/Nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <LogoComponent />
        <NavBarComponent />
      </div>
    );
  }
}

export default App;
