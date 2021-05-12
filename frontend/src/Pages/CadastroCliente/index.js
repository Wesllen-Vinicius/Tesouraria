import React, { useState, useEffect } from "react";
import "./CadastroCliente.css";
import Axios from "axios";
import Contnet from "../../Componentes/Content/index";
import Footer from "../../Componentes/Footer/index";
import Header from "../../Componentes/Header/index";
import Menu from "../../Componentes/Menu/index";
function CadastroCliente() {
  const [nome, setNome] = useState("");
  const [id, setId] = useState("");
  const [endereco, setEndereco] = useState("");
  const [contato, setContato] = useState("");
  const [email, setEmail] = useState("");
  const [listCliente, setListCliente] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/clientes").then(response => {
      setListCliente(response.data);
    });
  }, []);

  const cadastrar = () => {
    if (
      nome == "" ||
      id == "" ||
      endereco == "" ||
      contato == "" ||
      email == ""
    ) {
      alert("campos vazios");
    } else {
      Axios.post("http://localhost:3001/api/clientes", {
        id: id,
        name: nome,
        endereco: endereco,
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
        <div className="row formulario">
          <div className="col-2">
            <label>ID</label>
            <input
              type="text"
              className="form-control "
              onChange={e => setId(e.target.value)}
            />
            <label>Nome</label>
            <input
              type="text"
              className="form-control "
              onChange={e => setNome(e.target.value)}
            />
          </div>
          <div className="col-2">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              onChange={e => setEmail(e.target.value)}
            />
            <label>Contato</label>
            <input
              type="tel"
              className="form-control"
              onChange={e => setContato(e.target.value)}
            />
          </div>
          <label>Endereço</label>
          <input
            type="text"
            className="form-control"
            onChange={e => setEndereco(e.target.value)}
          />

          <div className="button-cadastrar">
            <button onClick={cadastrar}>Cadastrar</button>
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
                <th>ID</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Endereço</th>
                <th>Contato</th>
                <th>Data de Cadastro</th>
              </tr>
            </thead>

            {listCliente.map(val => {
              return (
                <tbody>
                  <tr>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>{val.endereco}</td>
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
