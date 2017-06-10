import React from "react";
import PropTypes from "prop-types";
import Hamburger from "./hamburger";
import Navigation from "./nav";
import {loadSass} from "../../utils";

const navData = [
  {
    name: 'Home',
    route: '/'
  },
  {
    name: 'About',
    route: '/aboutus'
  },
  {
    name: 'Products',
    route: '/products'
  },
  {
    name: 'Contact',
    route: '/contactus'
  },
];

loadSass("components/Header/style.scss");

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {
    return (
      <header role="banner" className="header">
        <h1>FastCart</h1>
        <nav role="navigation">
          <Hamburger onClick={this.toggle} open={!this.state.showMenu} />
          <Navigation navs={navData} open={this.state.showMenu} onClick={this.toggle} />
        </nav>
      </header>
    )
  }
}

Header.propTypes = {};

export default Header;
