import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

function Banner() {
  return (
    <Container fluid className="bg-secondary">
      <Container>
        <Row>
          <Col className="p-0" xs={12} lg={6}>
            <Image
              src={require("../assets/images/main01.png")}
              className="img-fluid  w-100"
            />
          </Col>
          <Col className="p-0" xs={12} lg={6}>
            <Image
              src={require("../assets/images/main02.png")}
              className="img-fluid w-100"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Banner;
