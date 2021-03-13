import React from "react";


function BoxesCollectedBoots(props) {
    return (

        <div key={props.key} boot={props.boot} className='bootBox'>
            <button onClick={() => props.clickOnDelete(props.boot)}
                className='deleteBtn'>X</button>
            <button className='incBtn'>+</button>
            <button className='incBtn'>+</button>
            <br></br>
            <p>{props.boot.model}</p>
            <img src={props.boot.img} />
        </div >

    )
};

export default BoxesCollectedBoots;