import React from "react";


function BoxesAvailableBoots(props) {

    return (
        <div key={props.key} boot={props.boot} className='bootBox' onClick={() => {
            props.clickOnBoot(props.boot)
            // props.clickOnBoot(event.target.value)
            // console.log(event)
        }}>
            <img src={props.boot.img} />
            <p>{props.boot.model}</p>
        </div>
    )
};

export default BoxesAvailableBoots;