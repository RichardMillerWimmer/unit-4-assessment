import React, { Component } from "react";


class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSearching: false,
            modelNumberSearch: null
        };
    }

    handleToggle = () => {
        this.setState({ isSearching: !this.state.isSearching })
    }

    handleInput = (value) => {
        this.setState({ modelNumberSearch: +value })
        console.log(this.state.modelNumberSearch)
    }

    handleFilter = () => {
        console.log(this.state.modelNumberSearch)
        this.props.filterBoots(this.state.modelNumberSearch)
        this.handleToggle()
    }

    handleReset = () => {
        this.props.resetFilter()
        this.setState({ modelNumberSearch: null })
    }


    render() {

        return (
            <section className='filter'>

                {this.state.isSearching
                    ? (
                        <div>
                            <h4>Search For Boots</h4>
                            <input value={this.state.modelNumberSearch} onChange={event => this.handleInput(event.target.value)} type='text' placeholder='search by model number'></input>
                            {/* <input type='text' placeholder='search by style'></input>
                            <input type='text' placeholder='search by leather'></input> */}
                            <button onClick={this.handleFilter} >search</button>
                        </div>
                    )
                    : (
                        <div>
                            <button onClick={this.handleToggle}>open search options</button>
                            <button onClick={this.handleReset}>reset filter</button>
                        </div>
                    )}
            </section >
        )
    }

};

export default Filter;