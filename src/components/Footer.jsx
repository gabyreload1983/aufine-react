import React from "react";
import { BsFillEnvelopeFill, BsWhatsapp } from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Col, Image, Navbar, Row } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid className="py-5 bg-dark text-white ">
      <Row>
        <Col xs={12} md={6} className="d-flex justify-content-center mb-5">
          <Navbar.Brand href="#" onClick={() => window.scroll("top")}>
            <Image
              height={40}
              src={require("../assets/images/logo.png")}
              alt=""
            />
          </Navbar.Brand>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <Row>
            <Col>
              <Nav.Link
                className="mb-4"
                href={"mailto:info@aufineargentina.com.ar"}
              >
                <BsFillEnvelopeFill size={30} className="me-3" />
                <span>info@aufineargentina.com.ar</span>
              </Nav.Link>

              <Nav.Link
                className="mb-4"
                href={
                  "https://wa.me/+54347612345678/?text=Hola!!! te contacto desde la web,"
                }
                target="_blank"
              >
                <BsWhatsapp size={30} className="me-3" />
                <span>54347612345678</span>
              </Nav.Link>

              <Nav.Link
                className="mb-4"
                href={
                  "https://www.google.com/maps/place/TRANSPORTES+LBB+SRL/@-32.766566,-60.7457001,15z/data=!4m2!3m1!1s0x0:0xd55e0612717db28?sa=X&ved=2ahUKEwjSyYOjgID-AhXDjJUCHYAvDWAQ_BJ6BAhgEAg"
                }
                target="_blank"
              >
                <SiGooglemaps size={30} className="me-3" />
                <span>Google Maps</span>
              </Nav.Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
