import React from "react";
import "./style.css";

export default function Habilidades() {
  return (
    <section class="container habilidades" id="habilidades">
      <h2>Habilidades</h2>
      <div class="tecnologias">
        <div>
          <img src="/assets/html-5.png" alt="HTML" />
          <h3>HTML</h3>
        </div>
        <div>
          <img src="/assets/css-3.png" alt="CSS" />
          <h3>CSS</h3>
        </div>
        <div>
          <img src="/assets/js.png" alt="JavaScript" />
          <h3>JavaScript</h3>
        </div>
        <div>
          <img src="/assets/science.png" alt="ReactJS" />
          <h3>ReactJS</h3>
        </div>
        <div>
          <img src="/assets/Tailwind_CSS_Logo.svg.png" alt="" />
          <h3>TailWindCSS</h3>
        </div>
      </div>
    </section>
  );
}
