import React, { Component } from 'react';
import axios from 'axios'


import BootCollection from './components/BootCollection'
import BootsAvailable from './components/BootsAvailable'
import Header from './components/Header';


import './App.css';
// import BoxesCollected2 from './components/BoxesCollected2';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bootsAvailable: [],
      collectedBoots: []
    }

    this.filterBoots = this.filterBoots.bind(this)
    this.resetFilter = this.resetFilter.bind(this)
    this.addBoot = this.addBoot.bind(this)
    this.addWear = this.addWear.bind(this)
    this.addCC = this.addCC.bind(this)
    this.deleteBoot = this.deleteBoot.bind(this)

  }

  componentDidMount() {
    axios.get('/api/available-boots')
      .then(res => {
        // console.log(res)
        this.setState({ bootsAvailable: res.data })
        // console.log(this.state.bootsAvailable)
      })
  }

  filterBoots(modelNumberSearch) {
    console.log(modelNumberSearch)
    axios.get(`/api/available-boots?model=${modelNumberSearch}`)
      .then(res => {
        console.log(res)
        this.setState({ bootsAvailable: res.data })
      })
      .catch(error => console.log(error))
  }

  // filterBoots(modelNumberSearch) {
  //   console.log(modelNumberSearch)

  //   let modelSearch = this.state.bootsAvailable.filter(elem => elem.model === modelNumberSearch)
  //   this.setState({ bootsAvailable: modelSearch })
  // }

  resetFilter() {
    axios.get('/api/available-boots')
      .then(res => {
        // console.log(res)
        this.setState({ bootsAvailable: res.data })
        // console.log(this.state.bootsAvailable)
      })
  }

  addBoot(newBoot) {
    // console.log(newBoot)
    axios.post('/api/collected-boots', { newBoot })
      .then(res => {
        // console.log(res)
        this.setState({ collectedBoots: res.data })
        // console.log(this.state.collectedBoots)
      })
      .catch(error => console.log(error))
  }

  addWear(bootId) {
    console.log(bootId)
    axios.put(`/api/collected-boots/wears/${bootId}`)
      .then(res => {
        console.log(res)
        this.setState({ collectedBoots: res.data })
      })
      .catch(error => console.log(error))
  }

  addCC(bootId) {
    axios.put(`/api/collected-boots/cc/${bootId}`)
      .then(res => {
        console.log(res)
        this.setState({ collectedBoots: res.data })
      })
      .catch(error => console.log(error))
  }

  deleteBoot(removeBoot) {
    console.log(removeBoot)
    axios.delete(`/api/collected-boots/${removeBoot}`)
      .then(res => {
        console.log(res)
        this.setState({ collectedBoots: res.data })
      })
      .catch(error => console.log(error))
  }


  render() {
    // console.log(this.state.collectedBoots)


    return (
      <section className="App" >
        <Header />
        <main className='flexContainer'>
          <section className='bootAvailable'>
            <BootsAvailable bootsAvailable={this.state.bootsAvailable} addBoot={this.addBoot} filterBoots={this.filterBoots} resetFilter={this.resetFilter} />
          </section>
          <section className='bootCollection'>
            <BootCollection collectedBoots={this.state.collectedBoots} deleteBoot={this.deleteBoot} addWear={this.addWear} addCC={this.addCC} />
            {/* <BootCollection /> */}
          </section>
        </main>
        <footer>
          <p>Boot Collection Tracker by: Richard Miller Wimmer</p>
        </footer>
      </section>
    );
  }
}

export default App;
