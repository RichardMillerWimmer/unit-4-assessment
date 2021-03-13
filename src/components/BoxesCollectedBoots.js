import React from "react";


function BoxesCollectedBoots(props) {
    return (

        <div key={props.key} boot={props.boot} className='bootBoxCollection'>
            <button onClick={() => props.clickOnDelete(props.boot)} className='deleteBtn'>X</button>
            <div className='wearsContainer'>
                <button className='incBtn1'>+</button>
                <p className='wears' >wears: {props.boot.wears}</p>
            </div>
            <div className='cleaningsContainer'>
                <button className='incBtn2'>+</button>
                <p className='cleanings'>cleanings: {props.boot.cc}</p>
            </div>
            <h3 className="modelNumber">{props.boot.model}</h3>
            <img src={props.boot.img} alt={props.boot.model} />
        </div >

    )
};

export default BoxesCollectedBoots;