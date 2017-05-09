import React, { PropTypes } from "react";

const Header = props => {
  return (
    <header role="banner">
      <h1>FastCart.com</h1>
      <nav role="navigation">
        <ul>
          <li><a href="#">link1</a></li>
          <li><a href="#">link2</a></li>
          <li><a href="#">link3</a></li>
          <li><a href="#">link4</a></li>
        </ul>
      </nav>
    </header>
  )
};

Header.propTypes = {};

export default Header;
