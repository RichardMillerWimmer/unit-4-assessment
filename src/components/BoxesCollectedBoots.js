import React from "react";


function BoxesCollectedBoots(props) {
    return (

        <div key={props.key} boot={props.boot} className='bootBoxCollection'>
            {/* <div className='btnContaniner'> */}
            {/* <div className="removeBtnContainer"> */}
            <button onClick={() => props.clickOnDelete(props.boot)} className='deleteBtn'>X</button>
            {/* </div> */}
            {/* <div className='collectionCntl'> */}
            <button className='incBtn1'>+</button>
            <p>wears: {props.boot.wears}</p>
            <button className='incBtn2'>+</button>
            <p>cleanings:{props.boot.c}</p>
            {/* </div> */}
            {/* </div> */}
            <h3 className="modelNumber">{props.boot.model}</h3>
            <img src={props.boot.img} alt={props.boot.model} />
        </div >

    )
};

export default BoxesCollectedBoots;