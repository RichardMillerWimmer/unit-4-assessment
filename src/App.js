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

    this.addBoot = this.addBoot.bind(this)

  }

  componentDidMount() {
    axios.get('/api/available-boots')
      .then(res => {
        // console.log(res)
        this.setState({ bootsAvailable: res.data })
        // console.log(this.state.bootsAvailable)
      })
    //   .catch(error => console.log(error))
    // axios.get('/api/collected-boots')
    //   .then(res => {
    //     this.setState({ collectedBoots: res.data })
    //   })
    //   .catch(error => console.log(error))
  }

  addBoot(newBoot) {
    // console.log(newBoot)
    axios.post('/api/collected-boots', { newBoot })
      .then(res => {
        console.log(res)
        this.setState({ collectedBoots: res.data })
        // console.log(this.state.collectedBoots)
      })
      .catch(error => console.log(error))
  }



  render() {
    // console.log(this.state.collectedBoots)
    return (
      <div className="App" >
        <Header />
        <BootsAvailable bootsAvailable={this.state.bootsAvailable} addBoot={this.addBoot} />
        <BootCollection collectedBoots={this.state.collectedBoots} />
      </div>
    );
  }
}

export default App;
