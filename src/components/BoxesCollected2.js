// // import { Component } from "react";
// import React, { Component } from "react";


// class BoxesCollected2 extends Component() {
//     constructor() {
//         super();
//         this.state = {
//             isEditing: false
//         }
//     }

//     render() {
//         return (

//             <div key={this.props.key} boot={this.props.boot} className='bootBoxCollection' >
//                 <button onClick={() => this.props.clickOnDelete(this.props.boot)} className='deleteBtn'>X</button>
//                 <div className='wearsContainer'>
//                     <button className='incBtn1'>+</button>
//                     <p className='wears' >wears: {this.props.boot.wears}</p>
//                 </div>
//                 <div className='cleaningsContainer'>
//                     <button className='incBtn2'>+</button>
//                     <p className='cleanings'>cleanings: {this.props.boot.cc}</p>
//                 </div>
//                 <h3 className="modelNumber">{this.props.boot.model}</h3>
//                 <img src={this.props.boot.img} alt={this.props.boot.model} />
//             </div >

//         )
//     }
// };

// export default BoxesCollected2;