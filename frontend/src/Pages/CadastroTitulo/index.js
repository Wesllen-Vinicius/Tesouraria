import React, { useState, useEffect } from "react";
import "./CadastroTitulo.css";
import Axios from "axios";
import Footer from "../../Componentes/Footer/index";
import Header from "../../Componentes/Header/index";
import Menu from "../../Componentes/Menu/index";

function CadastroTitulo() {
  const [valor, setValor] = useState("");
  const [tipo_conta, setTipo_conta] = useState("");
  const [vencimento, setVencimento] = useState("");
  const [pagamento, setPagamento] = useState("");
  const [cod_pessoa, setCod_pessoa] = useState("");
  const [listtitulos, setListTitulos] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/financeiro").then(response => {
      setListTitulos(response.data);
    });
  }, []);

  const cadastrar = () => {
    if (
      tipo_conta === "" ||
      valor === "" ||
      vencimento === "" ||
      pagamento === ""
    ) {
      alert("campos vazios");
    } else {
      Axios.post("http://localhost:3001/api/financeiro", {
        tipo_conta: tipo_conta,
        data_pagamento: pagamento,
        valor_titulo: valor,
        data_vencimento: vencimento,
        cod_pessoa: cod_pessoa,
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
        <form className="form-floating formulario">
          <div className="column">
            <label>Tipo da conta</label>
            <select
              className="form-control"
              onChange={e => setTipo_conta(e.target.value)}
              aria-label="Default select example"
            >
              <option selected>Tipo de Conta</option>
              <option value="pagar">A pagar</option>
              <option value="receber">A receber</option>
            </select>

            <label>Valor</label>
            <input
              type="text"
              className="form-control "
              onChange={e => setValor(e.target.value)}
            />
          </div>
          <div className="column">
            <label>Codigo conta</label>
            <input
              type="text"
              className="form-control is-invalid"
              onChange={e => setCod_pessoa(e.target.value)}
            />
            <label>Vencimento</label>
            <input
              type="date"
              className="form-control is-invalid"
              onChange={e => setVencimento(e.target.value)}
            />
          </div>
          <label>Pagamento</label>
          <input
            type="date"
            className="form-control is-invalid"
            onChange={e => setPagamento(e.target.value)}
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
                <th>Id</th>
                <th>Tipo da conta</th>
                <th>Codigo da conta</th>
                <th>Valor Titulo</th>
                <th>Vencimento</th>
                <th>Pagamento</th>
              </tr>
            </thead>

            {listtitulos.map(val => {
              return (
                <tbody>
                  <tr>
                    <td>{val.cod_conta}</td>
                    <td>{val.tipo_conta}</td>
                    <td>{val.cod_pessoa}</td>
                    <td>{val.valor_titulo},00</td>
                    <td>{val.data_vencimento}</td>
                    <td>{val.data_pagamento}</td>
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
