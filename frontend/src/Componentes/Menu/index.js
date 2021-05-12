import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <aside class="menu">
      <div className="links-navegacao">
        <Link to="/CadastroTitulo">Contas a pagar</Link>
      </div>
      <div className="links-navegacao">
        <Link to="/CadastroCliente">Contas a Receber</Link>
      </div>
    </aside>
  );
}
export default Menu;
