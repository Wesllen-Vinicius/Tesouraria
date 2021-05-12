exports.up = function (knex) {
  return knex.schema.createTable("financeiro", table => {
    table.increments("cod_conta").primary().notNull();
    table.string("tipo_conta").notNull();
    table.decimal("valor_titulo", 20).notNull();
    table.date("data_vencimento").notNull();
    table.date("data_pagamento").notNull();
    table.integer("cod_pessoa").unsigned().references("id").inTable("pessoas");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("financeiro");
};
