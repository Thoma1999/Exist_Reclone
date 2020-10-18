import PropTypes from "prop-types"
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 FormGroup,
 Label,
 Input
} from 'reactstrap';
import logo from '../images/logo-main-white.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  
  // const [search,setSearch] = useState(false)

  const submitSearch = (e) =>{
      e.preventDefault();
      alert("Searched");
  }

  // const openSearch = () =>{
  //     setSearch(true);


  // }

  // const searchClass = search ?'searchInput active': 'searchInput'; 
  return (
    <div>
      <Navbar id="pageNav" dark expand={true} fixed="top" color="black">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
          <FormGroup id="searchForm" onSubmit={submitSearch}>
            <Input
              type="search"
              name="search"
              id="searchBox"
              placeholder="search"
            />
            <img className="searchIcon" src={require('../images/search.png')} alt="Search"/>
          </FormGroup>
      </Navbar>
      <div className="hero">
        <div className="content">
          <img src={logo}></img>
          <h2>Find the interesting in existing,
            the extraodinary from ordinary.
          </h2>
        </div>
      </div>
      <Navbar id="catNav" light expand="md">
        <NavbarToggler id="hamburger" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="m-auto" navbar>
            <NavItem>
              <NavLink href="/">Politics</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Culture</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Travel</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Technology</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">Business</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Health</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header