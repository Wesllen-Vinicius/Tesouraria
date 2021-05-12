import React, { useState, useEffect } from "react";
import "./CadastroTitulo.css";
import Axios from "axios";

import Contnet from "../../Componentes/Content/index";
import Footer from "../../Componentes/Footer/index";
import Header from "../../Componentes/Header/index";
import Menu from "../../Componentes/Menu/index";
function CadastroTitulo() {
  const [nomeFornecedor, setNomeFornecedor] = useState("");
  const [valor, setValor] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [vencimento, setVencimento] = useState("");
  const [listtitulos, setListTitulos] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/titulos").then(response => {
      setListTitulos(response.data);
    });
  }, []);

  const cadastrar = () => {
    if (nomeFornecedor == "" || cnpj == "" || valor == "" || vencimento == "") {
      alert("campos vazios");
    } else {
      Axios.post("http://localhost:3001/api/titulos", {
        cnpj: cnpj,
        nomeFornecedor: nomeFornecedor,
        valorTitulo: valor,
        vencimento: vencimento,
      }).then(() => {
        alert("sucess insert");
      });
    }
  };
  return (
    <div id="app">
      <Header />
      <Menu />
      <div className="content">
        <form class="form-floating formulario">
          <label>Nome do Fornecedor</label>
          <input
            type="text"
            class="form-control is-invalid"
            onChange={e => setNomeFornecedor(e.target.value)}
          />
          <label>CNPJ</label>
          <input
            type="text"
            class="form-control is-invalid"
            onChange={e => setCnpj(e.target.value)}
          />
          <label>Valor</label>
          <input
            type="number"
            class="form-control is-invalid"
            onChange={e => setValor(e.target.value)}
          />
          <label>Vencimento</label>
          <input
            type="date"
            class="form-control is-invalid"
            onChange={e => setVencimento(e.target.value)}
          />

          <div className="button-cadastrar">
            <button onClick={cadastrar} className="mt-2">
              Cadastrar
            </button>
          </div>
        </form>
        <div className="table-responsive" id="sailorTableArea">
          <table
            id="sailorTable"
            className="table table-striped table-bordered"
            width="100%"
          >
            <thead>
              <tr>
                <th>CNPJ</th>
                <th>Nome do Fornecedor</th>
                <th>Valor Titulo</th>
                <th>Vencimento</th>
              </tr>
            </thead>

            {listtitulos.map(val => {
              return (
                <tbody>
                  <tr>
                    <td>{val.cnpj}</td>
                    <td>{val.nomeFornecedor}</td>
                    <td>{val.valorTitulo}</td>
                    <td>{val.vencimento}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default CadastroTitulo;
