exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("financeiro")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("financeiro").insert([
        {
          tipo_conta: "A pagar",
          valor_titulo: "10000",

          data_vencimento: "2021-05-04",
          data_pagamento: "2021-05-04",
        },
        {
          tipo_conta: "A pagar",
          valor_titulo: "10000",
          data_vencimento: "2021-05-04",
          data_pagamento: "2021-05-04",
        },
        {
          tipo_conta: "A pagar",
          valor_titulo: "10000",
          data_vencimento: "2021-05-04",
          data_pagamento: "2021-05-04",
        },
        {
          tipo_conta: "A pagar",
          valor_titulo: "10000",
          data_vencimento: "2021-05-04",
          data_pagamento: "2021-05-04",
        },
        {
          tipo_conta: "A pagar",
          valor_titulo: "10000",
          data_vencimento: "2021-05-04",
          data_pagamento: "2021-05-04",
        },
        {
          tipo_conta: "A pagar",
          valor_titulo: "10000",
          data_vencimento: "2021-05-04",
          data_pagamento: "2021-05-04",
        },
        {
          tipo_conta: "A pagar",
          valor_titulo: "10000",
          data_vencimento: "2021-05-04",
          data_pagamento: "2021-05-04",
        },
        {
          tipo_conta: "A pagar",
          valor_titulo: "10000",
          data_vencimento: "2021-05-04",
          data_pagamento: "2021-05-04",
        },
        {
          tipo_conta: "A pagar",
          valor_titulo: "10000",
          data_vencimento: "2021-05-04",
          data_pagamento: "2021-05-04",
        },
        {
          tipo_conta: "A pagar",
          valor_titulo: "10000",
          data_vencimento: "2021-05-04",
          data_pagamento: "2021-05-04",
        },
        {
          tipo_conta: "A pagar",
          valor_titulo: "10000",
          data_vencimento: "2021-05-04",
          data_pagamento: "2021-05-04",
        },
        {
          tipo_conta: "A pagar",
          valor_titulo: "10000",
          data_vencimento: "2021-05-04",
          data_pagamento: "2021-05-04",
        },
        {
          tipo_conta: "A pagar",
          valor_titulo: "10000",
          data_vencimento: "2021-05-04",
          data_pagamento: "2021-05-04",
        },
        {
          tipo_conta: "A pagar",
          valor_titulo: "10000",
          data_vencimento: "2021-05-04",
          data_pagamento: "2021-05-04",
        },
        {
          tipo_conta: "A pagar",
          valor_titulo: "10000",
          data_vencimento: "2021-05-04",
          data_pagamento: "2021-05-04",
        },
        {
          tipo_conta: "A pagar",
          valor_titulo: "10000",
          data_vencimento: "2021-05-04",
          data_pagamento: "2021-05-04",
        },
        {
          tipo_conta: "A pagar",
          valor_titulo: "10000",
          data_vencimento: "2021-05-04",
          data_pagamento: "2021-05-04",
        },
        {
          tipo_conta: "A pagar",
          valor_titulo: "10000",
          data_vencimento: "2021-05-04",
          data_pagamento: "2021-05-04",
        },
        {
          tipo_conta: "A pagar",
          valor_titulo: "10000",
          data_vencimento: "2021-05-04",
          data_pagamento: "2021-05-04",
        },
      ]);
    });
};
