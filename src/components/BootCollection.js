import React, { Component } from 'react';

import BoxesCollectedBoots from './BoxesCollectedBoots'
// import './App.css';

class BootCollection extends Component {
    constructor() {
        super();
        this.state = {
            bootCollection: []
        }
    }



    render() {
        return (
            <div className="App" >
                <h2>Collected Boots</h2>
            </div>
        );
    }
}

export default BootCollection;