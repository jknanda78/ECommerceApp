import React from "react";
import PropTypes from "prop-types";
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from "../components/Layout";
import Signup from "../screens/Signup/containers";
import ProductList from "../screens/Products/components/productList";

/**
 * Represents Routes component.
 * @function
 */
const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Signup} />
          <Route path="/productList" component={ProductList} />
      </Route>
    </Router>
  )
}

export default Routes;
