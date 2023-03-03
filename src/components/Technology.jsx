import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

function Technology() {
  return (
    <Container fluid className="py-5  bg-secondary" id="technology">
      <Container>
        <h2>Tecnologia</h2>
        <Row className="gx-5">
          <Col className="p-0" xs={12} lg={6}>
            <Image
              src={require("../assets/images/Technology001.png")}
              className="img-fluid w-100 p-2"
            />
          </Col>
          <Col className="p-0" xs={12} lg={6}>
            <Image
              src={require("../assets/images/Technology002.png")}
              className="img-fluid w-100 p-2"
            />
          </Col>
          <Col className="p-0" xs={12} lg={6}>
            <Image
              src={require("../assets/images/Technology003.png")}
              className="img-fluid  w-100 p-2"
            />
          </Col>
          <Col className="p-0" xs={12} lg={6}>
            <Image
              src={require("../assets/images/Technology004.png")}
              className="img-fluid w-100 p-2"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Technology;
