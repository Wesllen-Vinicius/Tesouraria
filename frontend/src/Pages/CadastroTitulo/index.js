import React, { useState, useEffect } from "react";
import "./CadastroTitulo.css";
import Axios from "axios";
import Footer from "../../Componentes/Footer/index";
import Header from "../../Componentes/Header/index";
import Menu from "../../Componentes/Menu/index";
import { RiDeleteBinLine } from "react-icons/ri";
import InputMask from "react-input-mask";

function CadastroTitulo() {
  const [valor, setValor] = useState("");
  const [tipo_conta, setTipo_conta] = useState("");
  const [vencimento, setVencimento] = useState("");
  const [pagamento, setPagamento] = useState("");
  const [cod_pessoa, setCod_pessoa] = useState("");
  const [quant_parcelas, setParcelas] = useState("");
  const [tipo_negocio, setTipo_negocio] = useState("");
  const [menssagem, setMenssagem] = useState("");

  const [listtitulos, setListTitulos] = useState([]);

  const valorFormatado = parseFloat(valor).toFixed(2);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/financeiro").then(response => {
      setListTitulos(response.data);
    });
  }, []);

  const Deletar = cod_conta => {
    Axios.delete(`http://localhost:3001/api/delete/contas/${cod_conta}`)
      .then(() => {
        alert("Conta excluida com sucesso");
      })
      .catch(erro => {
        alert("ops! Usuario possui itens no financeiro Cadastrado!!");
      });
  };

  const cadastrar = () => {
    if (
      tipo_conta === "" ||
      valor === "" ||
      vencimento === "" ||
      pagamento === "" ||
      cod_pessoa === ""
    ) {
      setMenssagem("Campos vazios");
    } else {
      Axios.post("http://localhost:3001/api/financeiro", {
        tipo_conta: tipo_conta,
        tipo_negocio: tipo_negocio,
        data_pagamento: pagamento,
        quant_parcelas: quant_parcelas,
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
          <div className="row">
            <div className="col-6">
              <label>Tipo da conta</label>
              <select
                className="form-control"
                onChange={e => setTipo_conta(e.target.value)}
              >
                <option selected>Tipo de Conta</option>
                <option value="A pagar">A pagar</option>
                <option value="A receber">A receber</option>
              </select>
              <label>Parcelas</label>
              <select
                className="form-control"
                onChange={e => setParcelas(e.target.value)}
              >
                <option selected value="-">
                  Parcelas
                </option>
                <option value="1x">
                  1x R$ {(valorFormatado / 1).toFixed(2)}
                </option>
                <option value="2x">
                  2x R$ {(valorFormatado / 2).toFixed(2)}
                </option>
                <option value="3x">
                  3x R$ {(valorFormatado / 3).toFixed(2)}
                </option>
                <option value="4x">
                  4x R$ {(valorFormatado / 4).toFixed(2)}
                </option>
                <option value="5x">
                  5x R$ {(valorFormatado / 5).toFixed(2)}
                </option>
                <option value="6x">
                  6x R$ {(valorFormatado / 6).toFixed(2)}
                </option>
                <option value="7x">
                  7x R$ {(valorFormatado / 7).toFixed(2)}
                </option>
                <option value="8x">
                  8x R$ {(valorFormatado / 8).toFixed(2)}
                </option>
                <option value="9x">
                  9x R$ {(valorFormatado / 9).toFixed(2)}
                </option>
                <option value="10x">
                  10x R$ {(valorFormatado / 10).toFixed(2)}
                </option>
                <option value="11x">
                  11x R$ {(valorFormatado / 11).toFixed(2)}
                </option>
                <option value="12x">
                  12x R$ {(valorFormatado / 12).toFixed(2)}
                </option>
              </select>
            </div>
            <div className="col-6">
              <label>Valor</label>
              <input
                type="text"
                className="form-control "
                onChange={e => setValor(e.target.value)}
              />
              <div>
                <label>Tipo</label>
                <select
                  className="form-control"
                  onChange={e => setTipo_negocio(e.target.value)}
                >
                  <option selected>Tipo</option>
                  <option value="Consumo">Consumo</option>
                  <option value="Revenda">Revenda</option>
                  <option value="Patrimonio">Patrimonio</option>
                  <option value="Recebimento">Recebimento</option>
                  <option value="Vendas">Vendas</option>
                  <option value="Prestação de serviços">
                    Prestação de serviços
                  </option>
                  <option value="Outros">Outros</option>
                </select>
              </div>
            </div>

            <div className="col-6">
              <label>Codigo da pessoa</label>
              <input
                type="text"
                className="form-control "
                onChange={e => setCod_pessoa(e.target.value)}
              />
            </div>
            <div className="col-6">
              <label>Vencimento</label>
              <InputMask
                type="date"
                className="form-control "
                onChange={e => setVencimento(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label>Pagamento</label>
              <InputMask
                type="date"
                className="form-control"
                onChange={e => setPagamento(e.target.value)}
              />
            </div>
          </div>

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
                <th>Tipo da conta</th>
                <th>Codigo da conta</th>
                <th>Tipo</th>
                <th>Valor Titulo</th>
                <th>Quantidade parcelas</th>
                <th>Vencimento</th>
                <th>Pagamento</th>
                <th className="acoes">ações</th>
              </tr>
            </thead>

            {listtitulos.map(val => {
              return (
                <tbody>
                  <tr>
                    <td className="tableId">{val.cod_conta}</td>
                    <td>{val.tipo_conta}</td>
                    <td>{val.cod_pessoa}</td>
                    <td>{val.tipo_negocio}</td>
                    <td>R$ {val.valor_titulo.toFixed(2)}</td>
                    <td>{val.quant_parcelas}</td>
                    <td>{val.data_vencimento}</td>
                    <td>{val.data_pagamento}</td>
                    <th className="acoes">
                      <div>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            Deletar(val.cod_conta);
                          }}
                        >
                          <RiDeleteBinLine size={20} />
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
export default CadastroTitulo;
