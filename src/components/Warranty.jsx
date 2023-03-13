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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSendingEmail(true);
    setAnswerForm("");

    emailjs
      .sendForm(
        "service_2o8eimj",
        "template_6g962ec",
        form.current,
        "IKea0Z0eum6qgyMT-"
      )
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
          "0"
        )}
        RMULARI
        {isSendingEmail ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          "0"
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

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={7}
                placeholder="Mensaje"
                name="message"
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
