exports.up = function (knex) {
  return knex.schema.createTable("titulos", table => {
    table.string("cnpj", 20).primary().notNull().unique();
    table.string("nomeFornecedor", 150).notNull();
    table.decimal("valorTitulo").notNull();
    table.date("vencimento").notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("titulos");
};
