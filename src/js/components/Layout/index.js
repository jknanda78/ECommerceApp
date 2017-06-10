import React from "react";
import PropTypes from "prop-types";
import Header from "../Header";
import Footer from "../Footer";
import {loadSass} from "../../utils";

loadSass("components/Layout/style.scss");

const Layout = props => {
  return (
    <div className="layout">
      <Header/>
      <main className="main" role="main">
        {props.children}
      </main>
      <Footer/>
    </div>
  )
};

Layout.propTypes = {};

export default Layout;
