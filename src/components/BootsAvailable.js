import React, { Component } from 'react';

import BoxesAvailableBoots from './BoxesAvailableBoots'
// import './App.css';

class BootsAvailable extends Component {
    constructor() {
        super();
        this.state = {
            availableBootArray: []
        }
    }



    render() {
        return (
            <div className="App" >
                <h2>Available Boots</h2>
            </div>
        );
    }
}

export default BootsAvailable;
