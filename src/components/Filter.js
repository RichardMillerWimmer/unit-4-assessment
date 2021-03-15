import React, { Component } from "react";


class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSearching: false,
            modelNumberSearch: null,
            styleSearch: '',
            leatherSearch: ''
        };
    }

    // TOGGLE SEARCH //
    handleToggle = () => {
        this.setState({ isSearching: !this.state.isSearching })
    }

    // MODEL SEARCHING //
    handleInputModel = (value) => {
        this.setState({ modelNumberSearch: +value })
        console.log(this.state.modelNumberSearch)
    }

    handleFilterModel = () => {
        // console.log(this.state.modelNumberSearch)
        this.props.filterBootModel(this.state.modelNumberSearch)
        this.handleToggle()
    }

    //STYLE SEARCHING //
    handleInputStyle = (value) => {
        this.setState({ styleSearch: value })
        console.log(this.state.styleSearch)
    }

    handleFilterStyle = () => {
        this.props.filterBootStyle(this.state.styleSearch)
        this.handleToggle()
    }

    // LEATHER SEARCHING //
    handleInputLeather = (value) => {
        this.setState({ leatherSearch: value })
        console.log(this.state.leatherSearch)
    }

    handleFilterLeather = () => {
        this.props.filterBootLeather(this.state.leatherSearch)
        this.handleToggle()
    }

    // RESETING SEARCH //
    handleReset = () => {
        this.props.resetFilter()
        this.setState({ modelNumberSearch: null, styleSearch: '', leatherSearch: '' })
    }


    render() {

        return (
            <section className='filter'>

                {this.state.isSearching
                    ? (
                        <div>
                            <h4>Search For Boots</h4>
                            <input value={this.state.modelNumberSearch} onChange={event => this.handleInputModel(event.target.value)} type='text' placeholder='search by model number'></input>
                            <button onClick={this.handleFilterModel} >search model</button>
                            <input value={this.state.styleSearch} onChange={event => this.handleInputStyle(event.target.value)} type='text' placeholder='search by style'></input>
                            <button onClick={this.handleFilterStyle} >search style</button>
                            <input value={this.state.leatherSearch} onChange={event => this.handleInputLeather(event.target.value)} type='text' placeholder='search by leather'></input>
                            <button onClick={this.handleFilterStyle} >search leather</button>
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