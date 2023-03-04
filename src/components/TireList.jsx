import React from "react";
import { Container, Row } from "react-bootstrap";
import Tire from "./Tire";
import tires from "../assets/data/tires.json";

function TireList() {
  return (
    <Container className="py-5" id="tires">
      <h2>NEUMATICOS</h2>
      <Row>
        {tires.length > 0 &&
          tires.map((tire) => <Tire key={tire.codigo} tire={tire} />)}
      </Row>
    </Container>
  );
}

export default TireList;
