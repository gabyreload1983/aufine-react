import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function WarrantyDetail() {
  return (
    <Container className="py-5" id="warranty">
      <Row>
        <Col>
          <h2>Garantia</h2>
          <p>
            1 Derechos del consumidor: El consumidor tiene derecho a ser
            asesorado ampliamente en el punto de venta respecto al tipo de
            neumático que mejor se adapta a las condiciones de servicio del
            producto. Adicionalmente tendrá a disposición el acceso a catálogos
            del fabricante donde podrá tomar conocimiento de los diseños
            recomendados para cada tipo de servició, así también como la
            diferenciación de prestaciones. También se podrá consultar en el
            catálogo los datos técnicos de cada uno de los neumáticos. Es deber
            del personal de contacto en el punto de venta, brindar toda la
            información de neumáticos que el consumidor requiera.
          </p>
          <p>
            2 Alcance y duración Los neumáticos AUFINE están cubiertos con
            garantía por defectos de fabricación, mano de obra y/o materiales la
            cual se efectivizará siempre que los mismos cuenten con los números
            de serie completamente legibles. La garantía se extenderá por el
            término de vida útil de la banda original de rodamiento, (se
            denomina vida útil del neumático al período en el cual se produce el
            desgaste desde la profundidad de banda original hasta 1.6mm de
            profundidad remanente) o por el plazo de cinco años de la fecha de
            fabricación, cualquiera que ocurra primero. La fecha de fabricación
            se determina basándose en el Número de Serie inscripto en la pared
            lateral del neumático.
          </p>
          <p>
            3 Obligaciones de los usuarios en las presentaciones por garantía.
            La presentación de los reclamos que cumplimenten con los requisitos
            detallados en el punto anterior debe realizarse en preferentemente
            el punto de venta donde ha sido adquirido o en su defecto en
            cualquier local identificado con la marca. -El usuario del neumático
            debe cumplimentar el correspondiente formulario de reclamo, en el
            que consignará los datos completos del usuario y toda la información
            correspondiente al neumático presentado y sus condiciones de uso. El
            usuario deberá entregar el/los neumático/s para evaluación,
            cumpliendo previamente las condiciones antes descriptas, y recibirá
            el informe de resolución técnica correspondiente a la presentación.
            En el caso de comprobarse la existencia de defectos de fabricación
            se hará lugar al reclamo, de lo contrario se devolverá al usuario el
            neumático entregado para evaluación.
          </p>
          <p>
            4 Limitaciones de la presente garantía. La presente garantía no
            cubre riesgos o accidentes de servicio como cortes, pinchaduras,
            desgarros, roturas por golpe, raspaduras por colisiones, ni
            neumáticos que hallan sido reparados. Tampoco cubre daños por
            operación o uso inadecuado como exceso de carga, presión de inflado
            incorrecta, montaje incorrecto, uso de llantas no adecuadas dañadas
            o en mal estado, desgastes irregulares o prematuros por desperfectos
            mecánicos del vehículo o falta de rotación, exposición a altas
            temperaturas o a productos químicos nocivos, o cualquier otra falla
            emergente de un mal uso o negligencia. No cubre lucro cesante,
            pérdidas de tiempo, privación del uso del vehículo y/o daños
            emergentes o consecuentes. Los neumáticos entregados para
            evaluación, en cuyo caso se reconoció la garantía, pasan a ser de
            propiedad de TRANSPOTES LBB SRL
          </p>
          <p>
            5 Compensación Los neumáticos evaluados y aceptados como falla de
            fabricación tendrán una compensación equivalente al valor de su vida
            útil remanente. La vida útil remanente del neumático se determina
            tomando la profundidad actual promedio de la banda de rodamiento, De
            esta manera se establece un porcentaje (que corresponde al remanente
            de vida útil) que, aplicado al precio actual de lista del producto
            determina el valor de Ajuste.
          </p>
          <p className="fs-4">Garantía de Neumáticos y Política de Ajustes</p>
        </Col>
      </Row>
    </Container>
  );
}

export default WarrantyDetail;
