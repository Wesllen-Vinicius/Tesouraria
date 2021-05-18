import React, { useState, useEffect } from "react";
import "./CadastroTitulo.css";
import Axios from "axios";
import Footer from "../../Componentes/Footer/index";
import Header from "../../Componentes/Header/index";
import Menu from "../../Componentes/Menu/index";
import InputMask from "react-input-mask";

function CadastroTitulo() {
  const [valor, setValor] = useState("");
  const [tipo_conta, setTipo_conta] = useState("");
  const [vencimento, setVencimento] = useState("");
  const [pagamento, setPagamento] = useState("");
  const [cod_pessoa, setCod_pessoa] = useState("");
  const [Parcelas, setParcelas] = useState("");
  const [tipo_despesas, setTipo_despesas] = useState("");
  const [listtitulos, setListTitulos] = useState([]);

  const valorFormatado = parseFloat(valor).toFixed(2);

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
        tipo_despesas: tipo_despesas,
        data_pagamento: pagamento,
        quant_parcelas: Parcelas,
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
            <label>Parcelas</label>
            <select
              className="form-control"
              onChange={e => setParcelas(e.target.value)}
              aria-label="Default select example"
            >
              <option select value="1x">
                1x R$ {valorFormatado}
              </option>
              <option value="2x">2x R$ {valorFormatado / 2}</option>
              <option value="3x">3x R$ {valorFormatado / 3}</option>
              <option value="4x">4x R$ {valorFormatado / 4}</option>
              <option value="5x">5x R$ {valorFormatado / 5}</option>
              <option value="6x">6x R$ {valorFormatado / 6}</option>
              <option value="7x">7x R$ {valorFormatado / 7}</option>
              <option value="8x">8x R$ {valorFormatado / 8}</option>
              <option value="9x">9x R$ {valorFormatado / 9}</option>
              <option value="10x">10x R$ {valorFormatado / 10}</option>
              <option value="11x">11x R$ {valorFormatado / 11}</option>
              <option value="12x">12x R$ {valorFormatado / 12}</option>
            </select>

            <label>Tipo despesas</label>
            <select
              className="form-control"
              onChange={e => setTipo_despesas(e.target.value)}
              aria-label="Default select example"
            >
              <option selected>Tipo despesas</option>
              <option value="Consumo">Consumo</option>
              <option value="Revenda">Revenda</option>
              <option value="Patrimonio">Patrimonio</option>
            </select>
          </div>
          <div className="column">
            <label>Codigo conta</label>
            <input
              type="text"
              className="form-control is-invalid"
              onChange={e => setCod_pessoa(e.target.value)}
            />
            <label>Vencimento</label>
            <InputMask
              mask="99/99/9999"
              type="text"
              className="form-control is-invalid"
              onChange={e => setVencimento(e.target.value)}
            />
          </div>
          <label>Pagamento</label>
          <InputMask
            mask="99/99/9999"
            type="text"
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
                <th className="tableId">Id</th>
                <th className="tableTipoConta">Tipo da conta</th>
                <th className="tableCpfCnpj">Codigo da conta</th>
                <th className="tableTipoDespesa">Tipo de despesa</th>
                <th>Valor Titulo</th>
                <th>Quantidade parcelas</th>
                <th>Vencimento</th>
                <th>Pagamento</th>
              </tr>
            </thead>

            {listtitulos.map(val => {
              return (
                <tbody>
                  <tr>
                    <td className="tableId">{val.cod_conta}</td>
                    <td className="tableTipoConta">{val.tipo_conta}</td>
                    <td className="tableCpfCnpj">{val.cod_pessoa}</td>
                    <td className="tableTipoDespesa">{val.tipo_despesas}</td>
                    <td>R$ {val.valor_titulo.toFixed(2)}</td>
                    <td>{val.quant_parcelas}</td>
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
