import React, { useState, useEffect } from "react";
import "./CadastroCliente.css";
import Axios from "axios";
import Footer from "../../Componentes/Footer/index";
import Header from "../../Componentes/Header/index";
import Menu from "../../Componentes/Menu/index";
import InputMask from "react-input-mask";

import { RiDeleteBinLine } from "react-icons/ri";
import Modale from "../../Componentes/Modal/index";

function CadastroCliente() {
  const [nome, setNome] = useState("");
  const [cnpj_cpf, setCnpj_cpf] = useState("");
  const [bairro, setBairro] = useState("");
  const [cep, setCep] = useState("");
  const [numero, setNumero] = useState("");
  const [tipo_pessoa, setTipo_pessoa] = useState("");
  const [contato, setContato] = useState("");
  const [email, setEmail] = useState("");
  const [tipo_cliente, setTipo_cliente] = useState("");
  const [listPessoas, setListPessoas] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/pessoas").then(response => {
      setListPessoas(response.data);
    });
  }, []);

  const cadastrar = () => {
    if (
      nome === "" ||
      cnpj_cpf === "" ||
      bairro === "" ||
      cep === "" ||
      numero === "" ||
      tipo_pessoa === "" ||
      contato === "" ||
      email === ""
    ) {
      alert("campos vazios");
    } else {
      Axios.post("http://localhost:3001/api/pessoas", {
        nome: nome,
        bairro: bairro,
        cep: cep,
        cnpj_cpf: cnpj_cpf,
        tipo_pessoa: tipo_pessoa,
        numero: numero,
        contato: contato,
        tipo_cliente: tipo_cliente,
        email: email,
        dataDeCadastro: new Date().toLocaleDateString("pt-BR"),
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
            <label>Tipo de pessoas</label>
            <select
              className="form-control"
              onChange={e => setTipo_pessoa(e.target.value)}
              aria-label="Default select example"
            >
              <option selected>Tipo de Pessoa</option>
              <option value="fisica">Pessoa Física</option>
              <option value="juridica">Pessoa juridica</option>
            </select>
            <label>Tipo de Cliente</label>
            <select
              className="form-control"
              onChange={e => setTipo_cliente(e.target.value)}
              aria-label="Default select example"
            >
              <option selected>Tipo de Cliente</option>
              <option value="Cliente">Cliente</option>
              <option value="Fornecedor">Fornecedor</option>
            </select>
          </div>
          <div className="column">
            <label>CPF/CNPJ</label>
            <input
              type="text"
              className="form-control "
              onChange={e => setCnpj_cpf(e.target.value)}
            />
            <label>Nome</label>
            <input
              type="text"
              className="form-control "
              onChange={e => setNome(e.target.value)}
            />
          </div>
          <div className="column">
            <label>Contato</label>
            <InputMask
              mask="(99)99999-9999"
              type="tel"
              className="form-control"
              onChange={e => setContato(e.target.value)}
            />
            <label>CEP</label>
            <InputMask
              mask="99999-999"
              type="text"
              className="form-control"
              onChange={e => setCep(e.target.value)}
            />
          </div>
          <div className="column">
            <label>Bairro</label>
            <input
              type="text"
              className="form-control"
              onChange={e => setBairro(e.target.value)}
            />

            <label>Número</label>
            <input
              type="number"
              className="form-control"
              onChange={e => setNumero(e.target.value)}
            />
          </div>
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            onChange={e => setEmail(e.target.value)}
          />

          <div className="button-cadastrar ">
            <button onClick={cadastrar}>Cadastrar</button>
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
                <th className="tableId">ID</th>
                <th className="tableCpfCnpj">CPF/CNPJ</th>
                <th className="tableNome">Nome</th>
                <th className="tableTipoCliente">Tipo Cliente</th>
                <th className="tableEmail">Email</th>
                <th className="tableCep">CEP</th>
                <th>Contato</th>
                <th>Data de Cadastro</th>
                <th className="tableAcoes">Ações</th>
              </tr>
            </thead>

            {listPessoas.map(val => {
              return (
                <tbody>
                  <tr>
                    <td className="tableId">{val.id}</td>
                    <td className="tableCpfCnpj">{val.cnpj_cpf}</td>
                    <td className="tableNome">{val.nome}</td>
                    <td className="tableTipoCliente">{val.tipo_cliente}</td>
                    <td className="tableEmail">{val.email}</td>
                    <td className="tableCep">{val.cep}</td>
                    <td>{val.contato}</td>
                    <td>{val.dataDeCadastro}</td>
                    <th className="tableAcoes">
                      <div>
                        {" "}
                        <Modale />
                      </div>
                      <div>
                        <button>
                          <RiDeleteBinLine size={25} />
                        </button>
                      </div>
                    </th>
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
export default CadastroCliente;
