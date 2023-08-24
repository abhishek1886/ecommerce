import React, { useState, useContext } from "react";

import { Link, NavLink } from "react-router-dom";
import { Container, Navbar, Nav, Card, Button } from "react-bootstrap";
import Cart from "../Cart/Cart";
import CartContext from "../../store/cart-context";
import AuthContext from "../auth/auth-context";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const totalItems = cartCtx.items.length;

  const activeStyleLink = {
    textDecoration: "underline",
  }

  const logoutHandler = () => {
    authCtx.logout();
    cartCtx.logout();
  }

  return (
    <header>
      {cartCtx.cartIsOpen && <Cart onClose={cartCtx.setCartDisplay} show={cartCtx.cartIsOpen} />}
      <Navbar bg="black" variant="dark" expand="sm" fixed="top" className="py-1" style={{borderBottom: '2px solid white'}}>
        <Container>
          <Nav className="me-auto mx-auto">
            <Nav.Item>
              <Nav.Link as={NavLink} activeStyle={activeStyleLink} exact to="/home" className="nav-link fw-bold text-white" >HOME</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} activeStyle={activeStyleLink} exact to="/store" className="nav-link fw-bold text-white">STORE</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} activeStyle={activeStyleLink} exact to="/about" className="nav-link fw-bold text-white">ABOUT</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} activeStyle={activeStyleLink} exact to="/contactus" className="nav-link fw-bold text-white">CONTACT US</Nav.Link>
            </Nav.Item>
            {!authCtx.isLoggIn && <Nav.Item>
              <Nav.Link as={NavLink} activeStyle={activeStyleLink} exact to="/auth" className="nav-link fw-bold text-white">LogIn</Nav.Link>
            </Nav.Item>}
          </Nav>
        </Container>
        {authCtx.isLoggIn && <Button variant="outline-info" onClick={logoutHandler} className="text-white me-1">Log Out</Button>}
        <Button variant="outline-info" onClick={cartCtx.setCartDisplay} className="text-white me-1">Cart</Button>
        <h5 className="text-info me-3">{totalItems}</h5>
        
      </Navbar>
      <p className="display-1 text-center bg-secondary py-5 text-white fw-bold mb-0">The Generics</p>
    </header>
  );
};

export default Header;
