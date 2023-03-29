import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function Whatsapp() {
  return (
    <a
      href={`https://wa.me/+543417690165/?text=Hola!!! te contacto desde la web,`}
      className="whatsapp"
      target="_blank"
      rel="noreferrer"
    >
      <FaWhatsapp size={50} />
    </a>
  );
}

export default Whatsapp;
