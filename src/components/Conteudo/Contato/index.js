import React from "react";
import "./style.css";

export default function Contato() {
  return (
    <section class="container contato" id="contato">
      <h2>Contato</h2>
      <div class="contatos">
        <div>
          <a href="https://github.com/otaviosmc" target="_blank">
            <img src="/assets/github.png" alt="Github" />
            <p>Github</p>
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/ot%C3%A1vio-aparecido-simoncini-b7124b229/"
            target="_blank"
          >
            <img src="/assets/linkedin.png" alt="LinkedIn" />
            <p>LinkedIn</p>
          </a>
        </div>
        <div>
          <a href="mailto:contato.otaviosimoncini@gmail.com">
            <img src="/assets/email.png" alt="E-mail" />
            <p>E-mail</p>
          </a>
        </div>
        <div>
          <a href="tel:32999585149">
            <img src="/assets/telefone.png" alt="Telefone" />
            <p>Telefone</p>
          </a>
        </div>
      </div>
    </section>
  );
}
