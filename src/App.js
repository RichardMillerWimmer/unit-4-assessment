import React, { Component } from 'react';
import axios from 'axios'
import boots from '../server/bootsArray'

import BootCollection from './components/BootCollection'
import BootsAvailable from './components/BootsAvailable'
import Header from './components/Header';


import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bootsAvailable: boots,
      collectedBoots: []
    }
    //binding
  }

  addBoot(id) {
    // console.log(id)
    collectedBoots.push(id);
    // console.log(collectedBoots)
  }



  render() {
    return (
      <div className="App" >
        <Header />
        <BootsAvailable bootsAvailable={this.state.bootsAvailable} addBoot={this.state.addBoot} />
        <BootCollection collectedBoots={this.state.collectedBoots} />
      </div>
    );
  }
}

export default App;
