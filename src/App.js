import React, { Component } from 'react';
import axios from 'axios'


import BootCollection from './components/BootCollection'
import BootsAvailable from './components/BootsAvailable'
import Header from './components/Header';


import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bootsAvailable: [],
      collectedBoots: []
    }
    //binding
  }

  componentDidMount() {
    axios.get('/api/available-boots')
      .then(res => {
        // console.log(res)
        this.setState({ bootsAvailable: res.data })
        // console.log(this.state.bootsAvailable)
      })
      .catch(error => console.log(error))
  }



  // addBoot(id) {
  //   // console.log(id)
  //   this.setState({ collectedBoots: collectedBoots.push(id) });
  //   // console.log(this.state.collectedBoots)
  // }



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
