import React, { Component } from 'react';

import BoxesCollectedBoots from './BoxesCollectedBoots'
// import './App.css';

class BootCollection extends Component {
    constructor() {
        super();
        this.state = {
            // collectedBoots: []
        }
    }

    clickOnDelete(value) {
        let removeBoot = value
        console.log(removeBoot)
        this.props.deleteBoot(removeBoot)
    }


    render() {
        // console.log(this.props.collectedBoots)
        const mappedBoots = this.props.collectedBoots.map((elem, i) => (
            <BoxesCollectedBoots
                key={i}
                boot={elem}
                clickOnDelete={this.clickOnDelete}
            />
        ))
        // console.log(mappedBoots)

        return (
            <div className="App" >
                <h2>Collected Boots</h2>
                <div className='bootBoxContainer'>
                    {mappedBoots}
                </div>
            </div>
        );
    }
}

export default BootCollection;