import React, { useState, useEffect } from "react";
import "./relatorio.css";
import Axios from "axios";
import Footer from "../../Componentes/Footer/index";
import Header from "../../Componentes/Header/index";
import Menu from "../../Componentes/Menu/index";
import Modale from "../../Componentes/Modal/index";

function Relatorios() {
  return (
    <div id="app">
      <Header />
      <Menu />
      <Modale />
      <Footer />
    </div>
  );
}
export default Relatorios;
