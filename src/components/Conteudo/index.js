import React from "react";
import Banner from "./Banner";
import Projetos from "./Projetos";
import BotaoHome from "../BotaoHome";
import Sobre from "./Sobre";
import Habilidades from "./Habilidades";
import Formacao from "./Formacao";
import Contato from "./Contato";

export default function Conteudo() {
  return (
    <main>
      <Banner />
      <Sobre />
      <Projetos />
      <Habilidades />
      <Formacao />
      <Contato />
      <BotaoHome />
    </main>
  );
}
