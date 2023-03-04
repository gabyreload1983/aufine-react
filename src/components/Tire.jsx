import React from "react";
import { Col } from "react-bootstrap";
import TireModel from "./TireModel";

function Tire({ tire }) {
  return (
    <Col className="col-12 border-bottom border-2 border-primary py-3">
      <img
        src={require(`../assets/images/neumaticos/${tire.codigo}.png`)}
        alt=""
        className="img-fluid mb-3"
      />
      <div className="table-responsive">
        <table className="table table-sm table-bordered">
          <thead>
            <tr className="table-primary">
              <th scope="col">SIZE</th>
              <th scope="col">P.R.</th>
              <th scope="col">LOAD RANGE</th>
              <th scope="col">STYLE</th>
              <th scope="col">LOAD INDEX</th>
              <th scope="col" colSpan="2">
                TREAD DEPTH
              </th>

              <th scope="col">MAX SPEED</th>
              <th scope="col">SPEED RATINGAD</th>
              <th scope="col" colSpan="2">
                OVERALL DIAMETER
              </th>
              <th scope="col" colSpan="2">
                OVERALL WIDTH
              </th>
              <th scope="col">STANDARD RIM</th>
              <th scope="col" colSpan="4">
                MAX TIE LOAD SIMPLE
              </th>
              <th scope="col" colSpan="4">
                MAX TIE LOAD DUAL
              </th>
            </tr>
            <tr className="table-primary">
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col">32nds</th>
              <th scope="col">mm</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col">in</th>
              <th scope="col">mm</th>
              <th scope="col">in</th>
              <th scope="col">mm</th>
              <th scope="col"></th>
              <th scope="col">lbs</th>
              <th scope="col">psi</th>
              <th scope="col">kg</th>
              <th scope="col">kPa</th>
              <th scope="col">lbs</th>
              <th scope="col">psi</th>
              <th scope="col">kg</th>
              <th scope="col">kPa</th>
            </tr>
          </thead>
          <tbody>
            {tire.models.map((model) => (
              <TireModel key={model.size} model={model} />
            ))}
          </tbody>
        </table>
      </div>
    </Col>
  );
}

export default Tire;
