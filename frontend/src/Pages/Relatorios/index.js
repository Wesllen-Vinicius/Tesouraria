import React, { useState, useEffect } from "react";
import "./relatorio.css";
import Axios from "axios";
import Footer from "../../Componentes/Footer/index";
import Header from "../../Componentes/Header/index";
import Menu from "../../Componentes/Menu/index";
import InputMask from "react-input-mask";

function Relatorios() {
  const [relatorio, setRelatorio] = useState([]);
  const [tipoRelatorio, setTipoRelatorio] = useState("");
  const [mesPesquisa, setMesPesquisa] = useState("");
  const [anoMensal, setAnoMensal] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/api/relatorios").then(response => {
      setRelatorio(response.data);
    });
  }, []);

  function Pesquisar() {
    Axios.post("http://localhost:3001/api/relatorios/mensal", {
      params: { mes: mesPesquisa, ano: anoMensal },
    })
      .then(response => {
        setRelatorio(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  return (
    <div id="app">
      <Header />
      <Menu />
      <div className="content">
        <div className="row py-3 pesquisa">
          <div className="col-2">
            <label>Tipo relatorio</label>
            <select
              className="form-control"
              onChange={e => setTipoRelatorio(e.target.value)}
              aria-label="Default select example"
            >
              <option selected>Tipo relatorio</option>
              <option value="mensal">Mensal</option>
              <option value="anual">Anual</option>
              <option value="semestral">Semestral</option>
              <option value="porData">Por Data</option>
            </select>
          </div>
          {tipoRelatorio === "mensal" ? (
            <div className="col-2">
              <label>Mes</label>
              <select
                className="form-control"
                aria-label="Default select example"
                onChange={e => setMesPesquisa(e.target.value)}
              >
                <option>Escolha o mês</option>
                <option value="01">Janeiro</option>
                <option value="02">Fevereiro</option>
                <option value="03">Março</option>
                <option value="04">Abril</option>
                <option value="05">Maio</option>
                <option value="06">Junho</option>
                <option value="07">Julho</option>
                <option value="08">Agosto</option>
                <option value="09">Setembro</option>
                <option value="10">Outubro</option>
                <option value="11">Novembro</option>
                <option value="12">Dezembro</option>
              </select>

              <label>Data</label>
              <InputMask
                type="text"
                mask="9999"
                className="form-control "
                onChange={e => setAnoMensal(e.target.value)}
              />
            </div>
          ) : null}
          {tipoRelatorio === "anual" ? (
            <div className="col-2">
              <label>Data</label>
              <InputMask type="text" mask="9999" className="form-control " />
            </div>
          ) : null}
          <div className="col-2 button-pesquisa">
            <button className="btn btn-success " onClick={Pesquisar}>
              Pesquisar
            </button>
          </div>
        </div>
        <div className="table-responsive" id="sailorTableArea">
          <table
            id="sailorTable"
            className="table table-striped table-bordered"
            width="100%"
          >
            <thead>
              <tr>
                <th className="">Nome</th>
                <th className="">Valor titulo</th>
                <th className="">Tipo de Conta</th>
                <th className="">Descrição</th>
                <th>Vencimento</th>
                <th>Pagamento</th>
              </tr>
            </thead>
            {relatorio.map(val => {
              return (
                <tbody>
                  <tr>
                    <td className="">{val.nome}</td>
                    <td className="">R$ {val.valor_titulo.toFixed(2)}</td>
                    <td className="">{val.tipo_conta}</td>
                    <td className="">{val.tipo_despesas}</td>
                    <td className="">{val.data_vencimento}</td>
                    <td className="">{val.data_pagamento}</td>
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
export default Relatorios;
