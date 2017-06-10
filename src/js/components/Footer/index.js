import React from "react";
import PropTypes from "prop-types";

/**
 * Represents Footer component.
 * @function
 * @param {object} props - props passed from parent component
 */
const Footer = props => {
  return (
    <footer role="contentinfo">
      <p>This is my footer</p>
    </footer>
  )
};

Footer.propTypes = {};

export default Footer;
