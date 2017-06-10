import React from "react";

/**
 * Represents Hamburger or Menu.
 * @function
 * @param {object} props - props passed from parent component
 */
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
