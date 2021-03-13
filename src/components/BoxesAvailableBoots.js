import React from "react";


function BoxesAvailableBoots(props) {

    return (
        <div key={props.key} boot={props.boot} className='bootBox' onClick={() => {
            props.clickOnBoot(props.boot)
        }}>
            <div className='bootInfo'>
                <h3 className='modelNumber'>{props.boot.model}</h3>
                <p>{props.boot.style}</p>
                <p>{props.boot.leather}</p>
            </div>
            <img src={props.boot.img} alt={props.boot.model} />
        </div>
    )
};

export default BoxesAvailableBoots;