const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "tesouraria",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/pessoas", (req, res) => {
  const tipo_pessoa = req.body.tipo_pessoa;
  const cnpj_cpf = req.body.cnpj_cpf;
  const nome = req.body.nome;
  const contato = req.body.contato;
  const bairro = req.body.bairro;
  const cep = req.body.cep;
  const numero = req.body.numero;
  const email = req.body.email;
  const dataDeCadastro = req.body.dataDeCadastro;
  const tipo_cliente = req.body.tipo_cliente;

  const sqlInsert =
    "INSERT INTO pessoas (tipo_pessoa, nome, cnpj_cpf, contato, email,dataDeCadastro, bairro, cep, numero, tipo_cliente) VALUES (?,?,?,?,?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [
      tipo_pessoa,
      nome,
      cnpj_cpf,
      contato,
      email,
      dataDeCadastro,
      bairro,
      cep,
      numero,
      tipo_cliente,
    ],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/api/financeiro", (req, res) => {
  const tipo_conta = req.body.tipo_conta;
  const valor_titulo = req.body.valor_titulo;
  const data_vencimento = req.body.data_vencimento;
  const data_pagamento = req.body.data_pagamento;
  const cod_pessoa = req.body.cod_pessoa;
  const tipo_despesas = req.body.tipo_despesas;
  const quant_parcelas = req.body.quant_parcelas;

  const sqlInsert =
    "INSERT INTO financeiro (tipo_conta, valor_titulo, data_vencimento, data_pagamento,cod_pessoa,tipo_despesas,quant_parcelas) VALUES (?,?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [
      tipo_conta,
      valor_titulo,
      data_vencimento,
      data_pagamento,
      cod_pessoa,
      tipo_despesas,
      quant_parcelas,
    ],
    (err, result) => {
      console.log(err);
    }
  );
});

app.get("/api/pessoas", (req, res) => {
  const sqlSelect = "SELECT * FROM pessoas ORDER BY id ";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.get("/api/financeiro", (req, res) => {
  const sqlSelect = "SELECT * FROM financeiro ORDER BY data_vencimento desc";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.put("/api/update/pessoas", (req, res) => {
  const id = req.body.id;
  const nome = req.body.nome;

  const sqlUpdate = "UPDATE pessoas SET  nome = ? WHERE id = ?";

  db.query(sqlUpdate, [nome, id], (err, result) => {
    if (err) console.log(err);
  }).catch();
});

app.delete("/api/delete/pessoas/:id", (req, res) => {
  const id = req.params.id;

  const sqlDelete = "DELETE FROM pessoas where id = ?";
  db.query(sqlDelete, id, (err, result) => {
    console.log(err);
  });
});

app.get("/api/relatorios/mensal", (req, res) => {
  const mes = req.body.mesPesquisa;
  const ano = req.body.anoMensal;
  const sqlSelect =
    "select * from financeiro where data_vencimento Like (?-?-%)";
  db.query(sqlSelect, [mes, ano], (err, result) => {
    res.send(result);
  });
});

app.get("/api/relatorios", (req, res) => {
  const sqlSelect =
    "SELECT pessoas.nome, financeiro.valor_titulo,financeiro.tipo_conta, financeiro.tipo_despesas, financeiro.data_vencimento, financeiro.data_pagamento, financeiro.quant_parcelas FROM pessoas, financeiro WHERE financeiro.cod_pessoa = pessoas.cnpj_cpf";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/api/login", (req, res) => {});

app.listen(3001, () => {
  console.log("Rodando na porta 3001");
});
