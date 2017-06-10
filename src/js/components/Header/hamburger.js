import React from "react";

/**
 * Represents Hamburger component.
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
