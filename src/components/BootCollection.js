import React, { Component } from 'react';

import BoxesCollectedBoots from './BoxesCollectedBoots'



class BootCollection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            themeDark: false
        }

        this.clickOnWears = this.clickOnWears.bind(this)
        this.clickOnCC = this.clickOnCC.bind(this)
        this.clickOnDelete = this.clickOnDelete.bind(this)
        this.handleThemeToggle = this.handleThemeToggle.bind(this)
    }



    clickOnDelete(value) {
        // console.log(value)
        let removeBoot = value
        // console.log(removeBoot)
        this.props.deleteBoot(removeBoot)
    }

    clickOnWears(value) {
        // console.log(value)
        let bootId = value
        // console.log(bootId)
        this.props.addWear(bootId)
    }

    clickOnCC(value) {
        // console.log(value)
        let bootId = value
        // console.log(bootId)
        this.props.addCC(bootId)
    }

    handleThemeToggle() {
        this.setState({ themeDark: !this.state.themeDark })
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
        const mappedBoots = this.props.collectedBoots.map((elem) => (
            <BoxesCollectedBoots
                key={elem.id}
                boot={elem}
                clickOnDelete={this.clickOnDelete}
                clickOnWears={this.clickOnWears}
                clickOnCC={this.clickOnCC}
                themeDark={this.state.themeDark}
            />
        ))
        // console.log(mappedBoots)

        return (
            <aside className={this.state.themeDark ? 'themeDark' : ''} >
                < h2 > Collected Boots</ h2>
                <div className='bootBoxContainerCollection'>
                    <button className='themeBtn' onClick={this.handleThemeToggle}>theme</button>
                    {(noBoots())}
                    {mappedBoots}
                </div>
            </aside>
        );
    }
}

export default BootCollection;