import React, { Component } from 'react';

import BoxesCollectedBoots from './BoxesCollectedBoots'
// import './App.css';

class BootCollection extends Component {
    constructor() {
        super();
        this.state = {
            collectedBoots: [
                // {
                //     id: 0,
                //     model: 8111,
                //     style: "Iron Ranger",
                //     leather: "Amber Harness",
                //     img: '#',
                //     wears: null,
                //     cc: null
                // }
            ]
        }
    }



    render() {
        console.log(this.props.collectedBoots)
        const mappedBoots = this.props.collectedBoots.map((elem, i) => (
            <BoxesCollectedBoots
                key={i}
                boot={elem}
            />
        ))
        // console.log(mappedBoots)

        return (
            <div className="App" >
                <h2>Collected Boots</h2>
                {mappedBoots}
            </div>
        );
    }
}

export default BootCollection;