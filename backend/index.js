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

app.post("/api/pessoas", async (req, res) => {
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
      if (err) {
        res.json({ message: "Campos vazios!" });
      } else {
        res.json({ message: "Cadastro realizado com sucesso!" });
      }
    }
  );
});

app.post("/api/financeiro", async (req, res) => {
  const tipo_conta = req.body.tipo_conta;
  const valor_titulo = req.body.valor_titulo;
  const data_vencimento = req.body.data_vencimento;
  const data_pagamento = req.body.data_pagamento;
  const cod_pessoa = req.body.cod_pessoa;
  const tipo_negocio = req.body.tipo_negocio;
  const quant_parcelas = req.body.quant_parcelas;

  const sqlInsert =
    "INSERT INTO financeiro (tipo_conta, valor_titulo, data_vencimento, data_pagamento,cod_pessoa,tipo_negocio,quant_parcelas) VALUES (?,?,?,?,?,?,?)";

  db.query(
    sqlInsert,
    [
      tipo_conta,
      valor_titulo,
      data_vencimento,
      data_pagamento,
      cod_pessoa,
      tipo_negocio,
      quant_parcelas,
    ],
    (err, result) => {
      if (err) {
        res.json({ message: "Campos vazios!" });
        console.log(err);
      } else {
        res.json({ message: "Cadastro realizado com sucesso!" });
      }
    }
  );
});

app.get("/api/pessoas", async (req, res) => {
  const sqlSelect = "SELECT * FROM pessoas ORDER BY id ";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.get("/api/financeiro", async (req, res) => {
  const sqlSelect = "SELECT * FROM financeiro ORDER BY data_vencimento desc";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.put("/api/update/pessoas/:id", async (req, res) => {
  const id = req.body.id;
  const sqlUpdate = "UPDATE * FROM pessoas WHERE id = ?";
  db.query(sqlUpdate, id, (err, result) => {
    console.log(err);
    res.send(result);
  }).catch();
});

app.delete("/api/delete/pessoas/:id", async (req, res) => {
  const id = req.params.id;

  const sqlDelete = "DELETE FROM pessoas where id = ?";
  db.query(sqlDelete, id, (err, result) => {
    if (err) {
      res.json({ message: "Usuario possui contas pendentes!" });
    } else {
      res.json({ message: "Registro Apagado com Sucesso!" });
    }
  });
});
app.delete("/api/delete/contas/:cod_conta", async (req, res) => {
  const cod_conta = req.params.cod_conta;
  const sqlDelete = "DELETE FROM financeiro where cod_conta = ?";
  db.query(sqlDelete, cod_conta, (err, result) => {
    if (err) {
      res.json({ message: "Operação invalida!" });
      console.log(err);
    } else {
      res.json({ message: "Dados deletados com Sucesso!" });
    }
  });
});

app.post("/api/relatorios/mensal", async (req, res) => {
  const data = req.body.data;
  const data2 = req.body.data2;
  const sqlSelect =
    "SELECT  pessoas.nome, financeiro.valor_titulo,financeiro.tipo_conta, financeiro.tipo_negocio, financeiro.data_vencimento, financeiro.data_pagamento, financeiro.quant_parcelas FROM pessoas, financeiro WHERE data_vencimento BETWEEN ? AND ?";
  db.query(sqlSelect, [data, data2], (err, result) => {
    res.send(result);
    console.log(err);
  });
});

app.get("/api/relatorios", async (req, res) => {
  const sqlSelect =
    "SELECT pessoas.nome, financeiro.valor_titulo,financeiro.tipo_conta, financeiro.tipo_negocio, financeiro.data_vencimento, financeiro.data_pagamento, financeiro.quant_parcelas FROM pessoas, financeiro WHERE financeiro.cod_pessoa = pessoas.cnpj_cpf";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/api/login", async (req, res) => {
  const senha = req.body.senha;
  const nome = req.body.nome;
  db.query("SELECT * FROM users WHERE  nome = ? ", nome, (err, results) => {
    if (err) {
      console.log(err);
    }
    if (results.length > 0) {
      if (senha === results[0].senha) {
        res.json({ loggedIn: true, message: "Logado!" });
      } else {
        res.json({
          loggedIn: false,
          message: "Usuário ou Senha incorretos!",
        });
      }
    } else {
      res.json({ loggedIn: false, message: "Usuario não Existe!" });
    }
  });
});

app.post("/api/pesquisa/pessoas", async (req, res) => {
  const cnpj_cpf = req.body.cnpj_cpf;
  const sqlSelect =
    "SELECT id, cnpj_cpf, nome, tipo_pessoa, email, cep, contato,tipo_cliente, dataDeCadastro  FROM pessoas WHERE cnpj_cpf = ? ";
  db.query(sqlSelect, cnpj_cpf, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.listen(3001, () => {
  console.log("Rodando na porta 3001");
});
