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
              <th scope="col">TALLE</th>
              <th scope="col">P.R.</th>
              <th scope="col">RANGO DE CARGA</th>
              <th scope="col">ESTILO</th>
              <th scope="col">INDICE DE CARGA</th>
              <th scope="col" colSpan="2">
                PROFUNDIDAD DE BANDA
              </th>

              <th scope="col">VELOCIDAD MAX</th>
              <th scope="col">INDICE DE VELOCIDAD</th>
              <th scope="col" colSpan="2">
                DIÁMETRO TOTAL
              </th>
              <th scope="col" colSpan="2">
                ANCHO PROMEDIO
              </th>
              <th scope="col">LLANTA ESTÁNDAR</th>
              <th scope="col" colSpan="4">
                CARGA MÁXIMA DE AMARRE SIMPLE
              </th>
              <th scope="col" colSpan="4">
                CARGA MÁXIMA DE AMARRE DOBLE
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
