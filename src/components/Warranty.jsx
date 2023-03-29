import React, { useRef, useState } from "react";
import { Container, FloatingLabel, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import emailjs from "@emailjs/browser";

function Warranty(props) {
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [answerForm, setAnswerForm] = useState({
    display: false,
    error: false,
    message: "",
  });

  const serviceID = "service_lesvcma";
  const templateID = "template_fwpf1wy";
  const publicKey = "pVOvAjMtRyVk0jHsI";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSendingEmail(true);
    setAnswerForm("");

    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        (result) => {
          setAnswerForm({
            display: true,
            error: false,
            message: `Recibimos tu mensaje. Te responderemos lo antes posible.
              Saludos coordiales`,
          });
        },
        (error) => {
          setAnswerForm({
            display: true,
            error: true,
            message: "Ocurrio un error. Por favor intenta mas tarde.",
          });
        }
      )
      .finally(() => {
        setIsSendingEmail(false);
        e.target.reset();
      });
  };
  return (
    <Container className="py-5" id="warranty">
      <h2 className="text-center">
        F
        {isSendingEmail ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          "O"
        )}
        RMULARI
        {isSendingEmail ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          "O"
        )}{" "}
        GARANTIA
      </h2>

      <div className="row justify-content-center">
        <div className="col-lg-6">
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <FloatingLabel
                controlId="floatingName"
                label="Nombre y Apellido"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Nombre y Apellido"
                  name="name"
                  required
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <FloatingLabel
                controlId="floatingEmail"
                label="Email"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
              <FloatingLabel
                controlId="floatingAddress"
                label="Direccion"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Direccion"
                  name="address"
                  required
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <FloatingLabel
                controlId="floatingPhone"
                label="Telefono"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder="Telefono"
                  name="phone"
                  required
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicInvoice">
              <FloatingLabel
                controlId="floatingInvoice"
                label="Numero de Factura"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Numero de Factura"
                  name="invoice"
                  required
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDate">
              <FloatingLabel
                controlId="floatingDate"
                label="Fecha de Compra"
                className="mb-3"
              >
                <Form.Control
                  type="date"
                  placeholder="Fecha de compra"
                  name="date"
                  required
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicModel">
              <FloatingLabel
                controlId="floatingModel"
                label="Modelo"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Modelo"
                  name="model"
                  required
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDetail">
              <FloatingLabel
                controlId="floatingDetail"
                label="Detalle del motivo de su reclamo"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  style={{ height: 200 }}
                  name="detail"
                  required
                />
              </FloatingLabel>
            </Form.Group>

            <Button variant="primary w-100" type="submit">
              Enviar
            </Button>
          </Form>

          {answerForm.display && (
            <Alert
              variant={answerForm.error ? "warning" : "primary"}
              className="mt-3"
            >
              {answerForm.message}
            </Alert>
          )}
        </div>
      </div>
    </Container>
  );
}

export default Warranty;
