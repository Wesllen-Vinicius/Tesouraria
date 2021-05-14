import React, { useState, useEffect } from "react";
import "./CadastroCliente.css";
import Axios from "axios";
import Footer from "../../Componentes/Footer/index";
import Header from "../../Componentes/Header/index";
import Menu from "../../Componentes/Menu/index";
import InputMask from "react-input-mask";
function CadastroCliente() {
  const [nome, setNome] = useState("");
  const [cnpj_cpf, setCnpj_cpf] = useState("");
  const [bairro, setBairro] = useState("");
  const [cep, setCep] = useState("");
  const [numero, setNumero] = useState("");
  const [tipo_pessoa, setTipo_pessoa] = useState("");
  const [contato, setContato] = useState("");
  const [email, setEmail] = useState("");
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
            <label>CPF/CNPJ</label>
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

            <label>Email</label>
            <input
              type="email"
              className="form-control"
              onChange={e => setEmail(e.target.value)}
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

          <div className="button-cadastrar">
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
                <th>ID</th>
                <th>CPF/CNPJ</th>
                <th>Nome</th>
                <th>Email</th>
                <th>CEP</th>
                <th>Contato</th>
                <th>Data de Cadastro</th>
              </tr>
            </thead>

            {listPessoas.map(val => {
              return (
                <tbody>
                  <tr>
                    <td>{val.id}</td>
                    <td>{val.cnpj_cpf}</td>
                    <td>{val.nome}</td>
                    <td>{val.email}</td>
                    <td>{val.cep}</td>
                    <td>{val.contato}</td>
                    <td>{val.dataDeCadastro}</td>
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
