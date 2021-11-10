import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { CartIcon } from "../CartIcon/CartIcon";

import logo from "../../assets/leaf.png";

import "./Header.css";

export const Header = () => {
  return (
    <Navbar variant="tabs">
      <Navbar.Brand href="/">
        <img src={logo} alt="Logo" className="logoImg" />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/" className="linkNav">
          Plant Store
        </Nav.Link>
        <Nav.Link href="/shop" className="linkNav">
          Tienda
        </Nav.Link>
      </Nav>
      <CartIcon href="/cart" />
    </Navbar>
  );
};
