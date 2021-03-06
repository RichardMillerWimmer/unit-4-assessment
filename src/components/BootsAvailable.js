import React, { Component } from 'react';

import Filter from './Filter'
import BoxesAvailableBoots from './BoxesAvailableBoots'


class BootsAvailable extends Component {
    constructor() {
        super();
        this.state = {

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
        const mappedBoots = this.props.bootsAvailable.map((elem) => (
            <BoxesAvailableBoots
                key={elem.id}
                boot={elem}
                clickOnBoot={this.clickOnBoot}
            />
        ))
        return (
            <div >
                <h2>Available Boots</h2>
                <Filter
                    filterBootModel={this.props.filterBootModel}
                    filterBootStyle={this.props.filterBootStyle}
                    filterBootLeather={this.props.filterBootLeather}
                    resetFilter={this.props.resetFilter} />
                <div className='bootBoxContainer' >
                    {mappedBoots}
                </div>
            </div>
        );
    }
}

export default BootsAvailable;
