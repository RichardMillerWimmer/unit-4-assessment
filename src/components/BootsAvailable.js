import React, { Component } from 'react';
import axios from 'axios';


import BoxesAvailableBoots from './BoxesAvailableBoots'

// import './App.css';

class BootsAvailable extends Component {
    constructor() {
        super();
        this.state = {
            availableBootArray: [],
            collectedBoots: []
        }
        //binding
    }


    // componentDidMount() {
    //     axios.get('/api/available-boots')
    //         .then(res => {
    //             console.log(res)
    //             this.setState({ availableBootArray: res.boots })
    //             // console.log(availableBootArray)
    //         })
    //         .catch(error => console.log(error))
    // }

    // clickOnBoot(id) {
    //     axios.post('/api/collected-boots', { id: id })
    //         .then(res => {
    //             this.props.addBoot(id)
    //         })
    //         .catch(error => console.log(error))
    // }

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
                {mappedBoots}
            </div>
        );
    }
}

export default BootsAvailable;
