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

app.post("/api/clientes", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const contato = req.body.contato;
  const endereco = req.body.endereco;
  const email = req.body.email;
  const dataDeCadastro = req.body.dataDeCadastro;

  const sqlInsert =
    "INSERT INTO clientes (id, name,contato,endereco,email,dataDeCadastro) VALUES (?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [id, name, contato, endereco, email, dataDeCadastro],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/api/titulos", (req, res) => {
  const cnpj = req.body.cnpj;
  const nomeFornecedor = req.body.nomeFornecedor;
  const valorTitulo = req.body.valorTitulo;
  const vencimento = req.body.vencimento;

  const sqlInsert =
    "INSERT INTO titulos (cnpj, nomeFornecedor,valorTitulo, vencimento) VALUES (?,?,?,?)";
  db.query(
    sqlInsert,
    [cnpj, nomeFornecedor, valorTitulo, vencimento],
    (err, result) => {
      console.log(err);
    }
  );
});

app.get("/api/clientes", (req, res) => {
  const sqlSelect = "SELECT * FROM clientes ORDER BY dataDeCadastro desc";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.get("/api/titulos", (req, res) => {
  const sqlSelect = "SELECT * FROM titulos ORDER BY vencimento desc";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.listen(3001, () => {
  console.log("Rodando na porta 3001");
});
