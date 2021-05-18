exports.up = function (knex) {
  return knex.schema.createTable("financeiro", table => {
    table.increments("cod_conta").primary().notNull();
    table.string("tipo_conta").notNull();
    table.decimal("valor_titulo", 20).notNull();
    table.string("data_vencimento").notNull();
    table.string("data_pagamento").notNull();
    table.string("tipo_despesas").notNull();
    table.string("quant_parcelas");
    table
      .string("cod_pessoa", 50)
      .references("cnpj_cpf")
      .inTable("pessoas");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("financeiro");
};
