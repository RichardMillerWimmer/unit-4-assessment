import React, { Component } from 'react';
import axios from 'axios'

import BootCollection from './components/BootCollection'
import BootsAvailable from './components/BootsAvailable'
import Header from './components/Header';


import './App.css';

class App extends Component {




  render() {
    return (
      <div className="App" >
        <Header />
        <BootsAvailable />
        <BootCollection />
      </div>
    );
  }
}

export default App;
