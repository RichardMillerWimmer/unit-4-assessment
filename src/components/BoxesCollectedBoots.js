import React from "react";


function BoxesCollectedBoots(props) {
    return (

        <div >
            <img src={props.boot.img} />
            <p>{props.boot.model}</p>
        </div>

    )
};

export default BoxesCollectedBoots;