import React from "react";
import "./style.css";

export default function Projetos() {
  return (
    <section class="projetos container" id="projetos">
      <h2>Projetos</h2>
      <div class="projeto">
        <img className="proj-img" src="/assets/proj1.png" alt="Projeto 1" />
        <div>
          <h3>Landing Page Barbearia</h3>
          <p>
            Landing Page de uma barbearia em ReactJS e TailwindCSS, com temas
            claro e escuro.
          </p>
          <a
            target="_blank"
            href="https://github.com/otaviosmc/set-theme-barbearia"
            class="gitdep"
          >
            <img src="/assets/github.png" alt="GitHub" />
            <p>Repositório do GitHub</p>
          </a>
          <a
            target="_blank"
            href="https://set-theme-barbearia.vercel.app/"
            class="gitdep"
          >
            <img src="/assets/file-upload.png" alt="Deploy" />
            <p>Site upado na Internet</p>
          </a>
        </div>
      </div>
      <div class="projeto">
        <img className="proj-img" src="/assets/proj2.jpg" alt="Projeto 1" />
        <div>
          <h3>Ótica Vida</h3>
          <p>
            Landing Page de uma ótica com produtos e preços. Projeto feito em
            ReactJS.
          </p>
          <a
            target="_blank"
            href="https://github.com/otaviosmc/otica-react"
            class="gitdep"
          >
            <img src="/assets/github.png" alt="GitHub" />
            <p>Repositório do GitHub</p>
          </a>
          <a
            target="_blank"
            href="https://otica-vida.vercel.app/"
            class="gitdep"
          >
            <img src="/assets/file-upload.png" alt="Deploy" />
            <p>Site upado na Internet</p>
          </a>
        </div>
      </div>
      <div class="projeto">
        <img className="proj-img" src="/assets/proj3.png" alt="Projeto 1" />
        <div>
          <h3>Huddle Landing Page</h3>
          <p>
            Landing Page de uma página de um desafio do site Front-End Mentor,
            utilizei TailwindCSS para estilizar, meu primeiro projeto em TWCSS.
          </p>
          <div class="gitdep">
            <img src="/assets/github.png" alt="GitHub" />
            <a
              target="_blank"
              href="https://github.com/otaviosmc/Huddle-Landing-Page-TWCSS"
            >
              Repositório do GitHub
            </a>
          </div>
          <div class="gitdep">
            <img src="/assets/file-upload.png" alt="Deploy" />
            <a
              target="_blank"
              href="https://otaviosmc.github.io/Huddle-Landing-Page-TWCSS/"
            >
              Site upado na Internet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
