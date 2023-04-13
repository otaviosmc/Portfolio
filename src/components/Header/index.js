import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/projetos">Projetos</Link>
          </li>
          <li>
            <Link to="/habilidades">Habilidades</Link>
          </li>
          <li>
            <Link to="/formacao">Formação</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
