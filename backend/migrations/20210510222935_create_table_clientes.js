exports.up = function (knex) {
  return knex.schema.createTable("clientes", table => {
    table.string("id", 20).primary().notNull().unique();
    table.string("name").notNull();
    table.string("endereco").notNull();
    table.string("contato").notNull();
    table.string("email").notNull().unique();
    table.string("dataDeCadastro").notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("clientes");
};
