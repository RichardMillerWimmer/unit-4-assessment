import React from "react";


function BoxesCollectedBoots(props) {
    return (

        <div key={props.key} boot={props.boot} className='bootBoxCollection'>
            <button onClick={() => props.clickOnDelete(props.boot.id)} className='deleteBtn'>X</button>
            <div className='wearsContainer'>
                <button onClick={() => props.clickOnWears(props.boot.id)} className='incBtn1'>+</button>
                <p className='wears' >wears: {props.boot.id}</p>
            </div>
            <div className='cleaningsContainer'>
                <button onClick={() => props.clickOnCC(props.boot.id)} className='incBtn2'>+</button>
                <p className='cleanings'>cleanings: {props.boot.id}</p>
            </div>
            <h3 className="modelNumber">{props.boot.model}</h3>
            <img src={props.boot.img} alt={props.boot.model} />
        </div >

    )
};

export default BoxesCollectedBoots;