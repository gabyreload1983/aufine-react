import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar(props) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#" onClick={() => window.scroll("top")}>
          {" "}
          <img
            alt=""
            src={require("../assets/images/logo.png")}
            height="26"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#company">EMPRESA</Nav.Link>
            <Nav.Link href="#technology">TECNOLOGIA</Nav.Link>
            <Nav.Link href="#tires">NEUMATICOS</Nav.Link>
            <Nav.Link href="#recommendations">RECOMENDACIONES</Nav.Link>
            <Nav.Link href="#warranty">GARANTIA</Nav.Link>
            <Nav.Link href="#contact">CONTACTO</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
