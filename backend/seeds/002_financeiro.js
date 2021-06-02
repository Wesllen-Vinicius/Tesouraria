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
          tipo_negocio: "Consumo",
          quant_parcelas: "2x",
          data_vencimento: "2021-05-21",
          data_pagamento: "2021-04-22",
          quant_parcelas: "2x",
          cod_pessoa: "03538895201",
        },
        {
          tipo_conta: "A pagar",
          valor_titulo: "10000",
          tipo_negocio: "Consumo",
          data_vencimento: "2021-10-20",
          data_pagamento: "2021-08-21",
          quant_parcelas: "2x",
          cod_pessoa: "03538895201",
        },
        {
          tipo_conta: "A pagar",
          valor_titulo: "10000",
          tipo_negocio: "Consumo",
          data_vencimento: "2021-05-04",
          data_pagamento: "2021-05-04",
          quant_parcelas: "2x",
          cod_pessoa: "03538895201",
        },
        {
          tipo_conta: "A pagar",
          valor_titulo: "10000",
          tipo_negocio: "Consumo",
          data_vencimento: "2021-09-10",
          data_pagamento: "2021-10-04",
          quant_parcelas: "2x",
          cod_pessoa: "03538895201",
        },
        {
          tipo_conta: "A pagar",
          valor_titulo: "10000",
          tipo_negocio: "Consumo",
          data_vencimento: "2021-11-04",
          data_pagamento: "2021-12-04",
          quant_parcelas: "2x",
          cod_pessoa: "03538895201",
        },
        {
          tipo_conta: "A pagar",
          valor_titulo: "10000",
          tipo_negocio: "Consumo",
          data_vencimento: "2021-03-12",
          data_pagamento: "2021-05-12",
          quant_parcelas: "2x",
          cod_pessoa: "03538895201",
        },
        {
          tipo_conta: "A pagar",
          valor_titulo: "10000",
          tipo_negocio: "Consumo",
          data_vencimento: "2021-06-04",
          data_pagamento: "2021-01-02",
          quant_parcelas: "2x",
          cod_pessoa: "03538895201",
        },
        {
          tipo_conta: "A pagar",
          valor_titulo: "10000",
          tipo_negocio: "Consumo",
          data_vencimento: "2021-06-10",
          data_pagamento: "2021-12-20",
          quant_parcelas: "2x",
          cod_pessoa: "03538895201",
        },
        {
          tipo_conta: "A pagar",
          valor_titulo: "10000",
          tipo_negocio: "Consumo",
          data_vencimento: "2021-06-14",
          data_pagamento: "2021-06-20",
          quant_parcelas: "2x",
          cod_pessoa: "03538895201",
        },
        {
          tipo_conta: "A pagar",
          valor_titulo: "10000",
          tipo_negocio: "Consumo",
          data_vencimento: "2021-12-02",
          data_pagamento: "2021-12-01",
          quant_parcelas: "5x",
          cod_pessoa: "03538895201",
        },
        {
          tipo_conta: "A pagar",
          valor_titulo: "10000",
          tipo_negocio: "Consumo",
          data_vencimento: "2021-11-03",
          data_pagamento: "2021-12-19",
          quant_parcelas: "4x",
          cod_pessoa: "03538895201",
        },
        {
          tipo_conta: "A pagar",
          valor_titulo: "10000",
          tipo_negocio: "Consumo",
          data_vencimento: "2020-12-15",
          data_pagamento: "2021-12-17",
          quant_parcelas: "3x",
          cod_pessoa: "03538895201",
        },
        {
          tipo_conta: "A pagar",
          valor_titulo: "10000",
          tipo_negocio: "Consumo",
          data_vencimento: "2021-05-22",
          data_pagamento: "2021-05-25",
          quant_parcelas: "12x",
          cod_pessoa: "03538895201",
        },
        {
          tipo_conta: "A pagar",
          valor_titulo: "10000",
          tipo_negocio: "Consumo",
          data_vencimento: "2021-03-28",
          data_pagamento: "2021-07-29",
          quant_parcelas: "10x",
          cod_pessoa: "03538895201",
        },
        {
          tipo_conta: "A pagar",
          valor_titulo: "10000",
          tipo_negocio: "Consumo",
          data_vencimento: "2021-02-10",
          data_pagamento: "2021-02-28",
          quant_parcelas: "7x",
          cod_pessoa: "03538895201",
        },
        {
          tipo_conta: "A pagar",
          valor_titulo: "10000",
          tipo_negocio: "Consumo",
          data_vencimento: "2021-03-02",
          data_pagamento: "2021-09-01",
          quant_parcelas: "5x",
          cod_pessoa: "03538895201",
        },
        {
          tipo_conta: "A pagar",
          valor_titulo: "10000",
          tipo_negocio: "Consumo",
          data_vencimento: "2021-04-24",
          data_pagamento: "2021-10-20",
          quant_parcelas: "6x",
          cod_pessoa: "03538895201",
        },
        {
          tipo_conta: "A pagar",
          valor_titulo: "10000",
          tipo_negocio: "Consumo",
          data_vencimento: "2021-07-23",
          data_pagamento: "2021-08-23",
          quant_parcelas: "8x",
          cod_pessoa: "03538895201",
        },
        {
          tipo_conta: "A pagar",
          valor_titulo: "10000",
          tipo_negocio: "Consumo",
          data_vencimento: "2021-12-01",
          data_pagamento: "2022-12-01",
          quant_parcelas: "1x",
          cod_pessoa: "03538895201",
        },
      ]);
    });
};
