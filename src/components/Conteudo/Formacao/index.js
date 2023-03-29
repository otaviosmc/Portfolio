import React from "react";
import "./style.css";

export default function Formacao() {
  return (
    <section class="container formacao" id="formacao">
      <h2>Formação</h2>
      <div class="formacoes">
        <div class="diploma">
          <h3>Técnico em Desenvolvimento de Sistemas</h3>
          <p>IF Sudeste de MG</p>
          <span>Finalizado</span>
        </div>
        <div class="diploma">
          <h3>Curso de HTML</h3>
          <p>DevMedia</p>
          <a href="">Ver Certificado</a>
        </div>
        <div class="diploma">
          <h3>Curso de CSS</h3>
          <p>DevMedia</p>
          <a href="">Ver Certificado</a>
        </div>
        <div class="diploma">
          <h3>Curso de React</h3>
          <p>DevMedia</p>
          <a href="">Ver Certificado</a>
        </div>
        <div class="diploma">
          <h3>Tecnólogo em ADS</h3>
          <p>UNIVIÇOSA</p>
          <span>Em andamento</span>
        </div>
      </div>
    </section>
  );
}
