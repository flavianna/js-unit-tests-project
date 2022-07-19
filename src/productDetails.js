/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função no arquivo tests/productDetails.js para garantir que a implementação de productDetails está correta.
*/

const productDetails = (primeiroProduto, segundoProduto) => [
  {
    name: primeiroProduto,
    details: {
      productId: `${primeiroProduto}123`,
    },
  },
  {
    name: segundoProduto,
    details: {
      productId: `${segundoProduto}123`,
    },
  },
];

module.exports = productDetails;
