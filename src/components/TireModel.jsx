import React from "react";

function TireModel({ model }) {
  return (
    <tr>
      <td>{model.size}</td>
      <td>{model.pr}</td>
      <td>{model.loadRange}</td>
      <td>{model.style}</td>
      <td>{model.loadIndex}</td>
      <td>{model.traedDepth.nds}</td>
      <td>{model.traedDepth.mm}</td>
      <td>{model.maxSpeed}</td>
      <td>{model.speedRating}</td>
      <td>{model.overallDiameter.in}</td>
      <td>{model.overallDiameter.mm}</td>
      <td>{model.overallWith.in}</td>
      <td>{model.overallWith.mm}</td>
      <td>{model.standarRim}</td>
      <td>{model.maxTireLoadSingle.lbs}</td>
      <td>{model.maxTireLoadSingle.psi}</td>
      <td>{model.maxTireLoadSingle.kg}</td>
      <td>{model.maxTireLoadSingle.kpa}</td>
      <td>{model.maxTireLoadDual.lbs}</td>
      <td>{model.maxTireLoadDual.psi}</td>
      <td>{model.maxTireLoadDual.kg}</td>
      <td>{model.maxTireLoadDual.kpa}</td>
    </tr>
  );
}

export default TireModel;
