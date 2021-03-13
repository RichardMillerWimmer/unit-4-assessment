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

        let bootCheck = this.props.collectedBoots
        let noBoots = () => {
            if (bootCheck.length === 0) {
                return <p className='bootCheck'>add boots to <br></br>your collection</p>
            }
        }
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
                    {(noBoots())}
                    {mappedBoots}
                </div>
            </div>
        );
    }
}

export default BootCollection;