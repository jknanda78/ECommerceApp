import React, { PropTypes } from "react";

/**
 * @param {Object} props
 * @returns {JSX}
 */

 const Products = props => {
   return (
     <ul>
        <li>product 1</li>
        <li>product 2</li>
        <li>product 3</li>
        <li>product 4</li>
     </ul>
   )
 };

 Products.propTypes = {};

 export default Products;
