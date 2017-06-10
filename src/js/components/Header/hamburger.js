import React from "react";

const Hamburger = props => {
  return (
    <div className={`menu ${(!props.open)? 'close' : ''}`} onClick={props.onClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default Hamburger;
