import React, { useState, useEffect } from "react";
import "./CadastroCliente.css";
import Axios from "axios";
import Footer from "../../Componentes/Footer/index";
import Header from "../../Componentes/Header/index";
import Menu from "../../Componentes/Menu/index";
import InputMask from "react-input-mask";

import { RiDeleteBinLine } from "react-icons/ri";

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
  const [pesquisa, setPesquisa] = useState("");
  const [Mensagem, setMensagem] = useState("");
  const [MensagemCadastro, setMensagemCadastro] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/api/pessoas").then(response => {
      setListPessoas(response.data);
    });
  }, []);

  const cadastrar = () => {
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
    })
      .then(response => {
        setMensagemCadastro(response.data.message);
      })
      .catch(err => {
        setMensagem(err.data.message);
      });
  };
  function Pesquisa() {
    if (pesquisa === "") {
      alert("campo de pesquisa vazio");
    } else {
      Axios.post("http://localhost:3001/api/pesquisa/pessoas", {
        cnpj_cpf: pesquisa,
      }).then(response => {
        setListPessoas(response.data);
      });
    }
  }
  const Deletar = id => {
    console.log(id);
    Axios.delete(`http://localhost:3001/api/delete/pessoas/${id}`).then(
      response => {
        if (response.data.message === "Usuario possui contas pendentes!") {
          setMensagem(response.data.message);
        } else {
          setMensagemCadastro(response.data.message);
        }
      }
    );
  };
  function teste() {
    setNome("gabriel");
  }

  return (
    <div id="app">
      <Header />
      <Menu />

      <div className="content">
        <div className="row formulario">
          <div className="col-6">
            <label>Tipo de pessoas</label>
            <select
              className="form-control"
              onChange={e => setTipo_pessoa(e.target.value)}
              aria-label="Default select example"
            >
              <option selected value="">
                Tipo de Pessoa
              </option>
              <option value="fisica">Pessoa Física</option>
              <option value="juridica">Pessoa juridica</option>
            </select>
            <label>Tipo de Cliente</label>
            <select
              className="form-control"
              onChange={e => setTipo_cliente(e.target.value)}
              aria-label="Default select example"
            >
              <option selected value="">
                Tipo de Cliente
              </option>
              <option value="Cliente">Cliente</option>
              <option value="Fornecedor">Fornecedor</option>
            </select>
          </div>
          {tipo_pessoa === "fisica" ? (
            <div className="col-6">
              <label>CPF</label>
              <InputMask
                mask="999.999.999-99"
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
          ) : null}
          {tipo_pessoa === "juridica" ? (
            <div className="col-6">
              <label>CNPJ</label>
              <InputMask
                mask="99.999.999/9999-99"
                type="text"
                className="form-control "
                onChange={e => setCnpj_cpf(e.target.value)}
              />

              <label>Nome Fantasia</label>
              <input
                type="text"
                className="form-control "
                onChange={e => setNome(e.target.value)}
              />
            </div>
          ) : null}

          <div className="col-6">
            <label>CEP</label>
            <InputMask
              mask="99999-999"
              type="text"
              className="form-control"
              onChange={e => setCep(e.target.value)}
            />
            <label>Contato</label>
            <InputMask
              mask="(99)99999-9999"
              type="tel"
              className="form-control"
              onChange={e => setContato(e.target.value)}
            />
          </div>
          <div className="col-6">
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

          <div className="col-12">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="button-cadastrar ">
          <button onClick={cadastrar}>Cadastrar</button>
        </div>
        <div className="row">
          <div className="col-6 ">
            <div>
              <label>CPF/CNPJ</label>
              <InputMask
                type="text"
                className="form-control"
                onChange={e => setPesquisa(e.target.value)}
              />
            </div>
            <div>
              <button className="btn btn-primary my-2 " onClick={Pesquisa}>
                Pesquisar
              </button>
            </div>
          </div>
          <div className=" mensagem col-6 mt-4">
            <p className=" text-center">{Mensagem}</p>
          </div>
          <div className=" mensagem-cadastro col-12">
            <p className=" text-center">{MensagemCadastro}</p>
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
                <th className="tableId">ID</th>
                <th className="">CPF/CNPJ</th>
                <th className="">Nome</th>
                <th className="">Tipo</th>
                <th className="">Email</th>
                <th className="">CEP</th>
                <th>Contato</th>
                <th>Data de Cadastro</th>
                <th className="">Ações</th>
              </tr>
            </thead>

            <tbody>
              {listPessoas.map(val => {
                return (
                  <tr>
                    <td className="tableId">{val.id}</td>
                    <td className="">{val.cnpj_cpf}</td>
                    <td className="">{val.nome}</td>
                    <td className="">{val.tipo_cliente}</td>
                    <td className="">{val.email}</td>
                    <td className="">{val.cep}</td>
                    <td>{val.contato}</td>
                    <td>{val.dataDeCadastro}</td>
                    <th>
                      <div className="col-12 btn-acoes">
                        <button
                          className="btn btn-danger "
                          onClick={() => {
                            Deletar(val.id);
                          }}
                        >
                          <RiDeleteBinLine size={25} />
                        </button>
                      </div>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default CadastroCliente;
