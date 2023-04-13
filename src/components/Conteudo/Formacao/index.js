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
          <a
            target="_blank"
            href="https://www.devmedia.com.br/certificado/tecnologia/html/otavio-aparecido-simoncini"
          >
            Ver Certificado
          </a>
        </div>
        <div class="diploma">
          <h3>Curso de CSS</h3>
          <p>DevMedia</p>
          <a
            target="_blank"
            href="https://www.devmedia.com.br/certificado/tecnologia/css/otavio-aparecido-simoncini"
          >
            Ver Certificado
          </a>
        </div>
        <div class="diploma">
          <h3>Curso de JS</h3>
          <p>DevMedia</p>
          <a
            target="_blank"
            href="https://www.devmedia.com.br/certificado/tecnologia/javascript/otavio-aparecido-simoncini"
          >
            Ver Certificado
          </a>
        </div>
        <div class="diploma">
          <h3>Curso de React</h3>
          <p>DevMedia</p>
          <a
            target="_blank"
            href="https://www.devmedia.com.br/certificado/tecnologia/react/otavio-aparecido-simoncini"
          >
            Ver Certificado
          </a>
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
