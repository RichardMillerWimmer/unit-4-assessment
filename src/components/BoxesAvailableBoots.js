import React from "react";


function BoxesAvailableBoots(props) {

    return (
        <div key={props.key} boot={props.boot} className='bootBox' onClick={() => {
            props.clickOnBoot(props.boot)
            // props.clickOnBoot(event.target.value)
            // console.log(event)
        }}>
            <h3 className='modelNumber'>{props.boot.model}</h3>
            <img src={props.boot.img} alt={props.boot.model} />
        </div>
    )
};

export default BoxesAvailableBoots;