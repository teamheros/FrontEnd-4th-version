import React, { Component } from "react";
import './chatList.css';

function Avatar(props:any) {
  return (
    <div>
      <div className="avatar">
        <div className="avatar-img">
          <img className="avatar-image" src={props.image} alt="#" />
        </div>
        <span className={`isOnline ${props.isOnline}`}></span>
      </div>
    </div>
  )
}

export default Avatar


// export default class Avatar extends Component {
//   constructor(props:any) {
//     super(props);
//   }
//   render() {
//     return (
//       <div className="avatar">
//         <div className="avatar-img">
//           <img src={this.props.image} alt="#" />
//         </div>
//         <span className={`isOnline ${this.props.isOnline}`}></span>
//       </div>
//     );
//   }
// }