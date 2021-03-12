import React from "react";


function BoxesAvailableBoots(props) {

    return (
        <div className='bootBox' onClick={props.clickOnBoot} >
            <img src={props.boot.img} />
            <p>{props.boot.model}</p>
        </div>
    )
};

export default BoxesAvailableBoots;