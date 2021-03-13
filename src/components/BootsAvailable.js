import React, { Component } from 'react';
// import axios from 'axios';

import Filter from './Filter'
import BoxesAvailableBoots from './BoxesAvailableBoots'

// import './App.css';

class BootsAvailable extends Component {
    constructor() {
        super();
        this.state = {
            // availableBootArray: [],
            collectedBoots: []
        }
        this.clickOnBoot = this.clickOnBoot.bind(this)
    }



    clickOnBoot(value) {
        // const { bootsAvailable } = this.props
        let newBoot = value
        // console.log(newBoot)
        this.props.addBoot(newBoot)
    }


    render() {
        // console.log(this.state.availableBootArray)
        const mappedBoots = this.props.bootsAvailable.map((elem, i) => (
            <BoxesAvailableBoots
                key={i}
                boot={elem}
                clickOnBoot={this.clickOnBoot}
            />
        ))
        return (
            <div className="App" >
                <h2>Available Boots</h2>
                <Filter />
                <div className='bootBoxContainer' >
                    {mappedBoots}
                </div>
            </div>
        );
    }
}

export default BootsAvailable;
