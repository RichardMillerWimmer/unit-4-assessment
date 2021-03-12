import React, { Component } from 'react';

import BoxesCollectedBoots from './BoxesCollectedBoots'
// import './App.css';

class BootCollection extends Component {
    constructor() {
        super();
        this.state = {
            collectedBoots: this.props.collectedBoots
        }
    }



    render() {

        mappedBoots = this.state.collectedBoots.map((elem, i) => (
            <BoxesCollectedBoots
                key={i}
                boots={elem}
            />
        ))

        return (
            <div className="App" >
                <h2>Collected Boots</h2>
                {mappedBoots}
            </div>
        );
    }
}

export default BootCollection;