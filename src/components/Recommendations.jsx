import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

function Recommendations() {
  return (
    <Container fluid className="py-5  bg-secondary" id="recommendations">
      <Container>
        <h2>RECOMENDACIONES</h2>
        <Row className="gx-5">
          <Col className="p-0" xs={12} lg={6}>
            <Image
              src={require("../assets/images/Recommendations01.png")}
              className="img-fluid w-100 p-2"
            />
          </Col>
          <Col className="p-0" xs={12} lg={6}>
            <Image
              src={require("../assets/images/Recommendations02.png")}
              className="img-fluid w-100 p-2"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Recommendations;
