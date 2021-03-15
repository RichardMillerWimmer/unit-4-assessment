import React, { Component } from "react";


class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSearching: false
        };
    }

    handleToggle = () => {
        this.setState({ isSearching: !this.state.isSearching })
    }



    render() {

        return (
            <section className='filter'>

                {this.state.isSearching
                    ? (
                        <form>
                            <h4>Search For Boots</h4>
                            <input type='text' placeholder='search by model number'></input>
                            <input type='text' placeholder='search by style'></input>
                            <input type='text' placeholder='search by leather'></input>
                            <button onClick={this.handleToggle} >search</button>
                        </form>
                    )
                    : (
                        <div>
                            <button onClick={this.handleToggle}>Open Search Options</button>
                        </div>
                    )}
            </section >
        )
    }

};

export default Filter;