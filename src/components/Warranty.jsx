import React, { useRef, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
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
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                placeholder="Nombre y Apellido"
                name="name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Direccion"
                name="address"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="number"
                placeholder="Telefono"
                name="phone"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="date"
                placeholder="Fecha de compra"
                name="date"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Marca y Modelo"
                name="brandModel"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Detalle del motivo de su reclamo"
                name="detail"
                required
              />
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
