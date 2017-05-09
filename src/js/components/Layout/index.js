import React, { PropTypes } from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout = props => {
  return (
    <main role="main">
      <Header/>
      {props.children}
      <Footer/>
    </main>
  )
};

Layout.propTypes = {};

export default Layout;
