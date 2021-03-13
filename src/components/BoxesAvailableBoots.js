import React from "react";


function BoxesAvailableBoots(props) {

    return (
        <div key={props.key} boot={props.boot} className='bootBox' onClick={() => {
            props.clickOnBoot(props.boot)
            // props.clickOnBoot(event.target.value)
            // console.log(event)
        }}>
            <p>{props.boot.model}</p>
            <img src={props.boot.img} />
        </div>
    )
};

export default BoxesAvailableBoots;