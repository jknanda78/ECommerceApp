import React from "react";

/**
 * Represents Navigation component.
 * @function
 * @param {object} props - props passed from parent component
 */
const Navigation = props => {
  return (
    <ul className={`navigation ${(!props.open)? 'close' : ''}`}>
      {props.navs.map(function(item, index){
        return <li key={item.name} className="item"><a href={item.route}>{item.name}</a></li>
      })}
    </ul>
  )
}

export default Navigation;
