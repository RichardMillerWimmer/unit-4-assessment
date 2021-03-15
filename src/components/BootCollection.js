import React, { Component } from 'react';
import axios from 'axios';

// import BoxesCollected2 from './BoxesCollected2'

import BoxesCollectedBoots from './BoxesCollectedBoots'



class BootCollection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // collectedBoots: []
        }

        this.clickOnWears = this.clickOnWears.bind(this)
        this.clickOnCC = this.clickOnCC.bind(this)
        this.clickOnDelete = this.clickOnDelete.bind(this)
    }



    clickOnDelete(value) {
        // console.log(value)
        let removeBoot = value
        // console.log(removeBoot)
        this.props.deleteBoot(removeBoot)
    }

    clickOnWears(value) {
        console.log(value)
        let bootId = value
        console.log(bootId)
        this.props.addWear(bootId)
    }

    clickOnCC(value) {
        console.log(value)
        let bootId = value
        console.log(bootId)
        this.props.addCC(bootId)
    }




    render() {
        // console.log(this.state.collectedBoots)


        let bootCheck = this.props.collectedBoots
        let noBoots = () => {
            if (bootCheck.length === 0) {
                return <p className='bootCheck'>add boots to<br></br>your collection</p>
            }
        }


        // console.log(this.props.collectedBoots)
        const mappedBoots = this.props.collectedBoots.map((elem, i) => (
            <BoxesCollectedBoots
                key={i}
                boot={elem}
                clickOnDelete={this.clickOnDelete}
                clickOnWears={this.clickOnWears}
                clickOnCC={this.clickOnCC}
            />
        ))
        // console.log(mappedBoots)

        return (
            <aside className="App" >
                <h2>Collected Boots</h2>
                <div className='bootBoxContainerCollection'>
                    {(noBoots())}
                    {mappedBoots}
                </div>
            </aside>
        );
    }
}

export default BootCollection;