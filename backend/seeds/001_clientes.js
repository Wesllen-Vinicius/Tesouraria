
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('clientes').del()
    .then(function () {
      // Inserts seed entries
      return knex('clientes').insert([
        {id: '03538895201', name: 'Wesllen'
      }
      ]);
    });
};
