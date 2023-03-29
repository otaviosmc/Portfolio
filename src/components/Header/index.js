import React from "react";
import "./style.css";

export default function Header() {
  return (
    <header>
      <nav class="container" id="header">
        <div className="titulo-header">
          <span className="tag">&lt;</span>
          <h1>Otavio</h1>
          <span className="tag">/&gt;</span>
        </div>
        <ul>
          <li>
            <a href="#header">Home</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#habilidades">Habilidades</a>
          </li>
          <li>
            <a href="#formacao">Formação</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
