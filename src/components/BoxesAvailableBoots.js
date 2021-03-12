import React from "react";


function BoxesAvailableBoots(props) {

    return (
        <div className='bootBox' onClick={props.clickOnBoot} >
            <ima src={props.boot.img} alt={props.style} />
            <p>{props.boot.style}</p>
        </div>
    )
};

export default BoxesAvailableBoots;