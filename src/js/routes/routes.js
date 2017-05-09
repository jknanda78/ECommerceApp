import React, { PropTypes } from "react";
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from "../components/Layout";
import Signup from "../screens/Signup/containers";
import ProductList from "../screens/Products/components/productList";

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
