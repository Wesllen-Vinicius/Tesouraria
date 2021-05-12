import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../src/Pages/Home";
import CadastroCliente from "../src/Pages/CadastroCliente/index";
import CadastroTitulo from "../src/Pages/CadastroTitulo/index";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/CadastroCliente" component={CadastroCliente} />
      <Route exact path="/CadastroTitulo" component={CadastroTitulo} />
    </Router>
  );
}

export default App;
