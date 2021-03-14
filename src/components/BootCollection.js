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

        // this.deleteBoot = this.deleteBoot.bind(this)
        this.clickOnDelete = this.clickOnDelete.bind(this)
    }



    clickOnDelete(value) {
        let removeBoot = value
        console.log(removeBoot)
        this.props.deleteBoot(removeBoot)
    }

    // deleteBoot(removeBoot) {
    //     console.log(removeBoot)
    //     axios.delete('/api/collected-boots', { removeBoot })
    //         .then(res => {
    //             console.log(res)
    //             this.setState({ collectedBoots: res.data })
    //         })
    //         .catch(error => console.log(error))
    // }

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