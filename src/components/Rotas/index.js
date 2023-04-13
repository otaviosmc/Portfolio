import React from "react";
import { Route, Routes } from "react-router-dom";
import Banner from "../Conteudo/Banner";
import Sobre from "../Conteudo/Sobre";
import Projetos from "../Conteudo/Projetos";
import Habilidades from "../Conteudo/Habilidades";
import Formacao from "../Conteudo/Formacao";
import Contato from "../Conteudo/Contato";

export default function Rotas() {
  return (
    <Routes>
      <Route exact path="/" element={<Banner />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/projetos" element={<Projetos />} />
      <Route path="/habilidades" element={<Habilidades />} />
      <Route path="/formacao" element={<Formacao />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  );
}
