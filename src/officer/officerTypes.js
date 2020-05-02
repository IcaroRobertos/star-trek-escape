const officerTypes = [
  {
    name: 'Capitão',
    description:
      'O capitão tem acesso irrestrito a todos os níveis da nave. Um dos grandes capitães para ser lembrado é o James T Kirk!',
    life: 100,
    maxLife: 150,
    damageRange: [4, 8],
    rechargeLife: 1.6,
  },
  {
    name: 'Oficial de Ciência',
    description:
      'O cientista da nave, é uma pessoa com extrema inteligência. O que pode ajudar a resolver muitos problemas rapidamente. Um dos grandes cientistas foi o Sr. Spock.',
    life: 80,
    maxLife: 110,
    damageRange: [2, 6],
    rechargeLife: 1.8,
  },
  {
    name: 'Oficial de Segurança',
    description:
      'O oficial de segurança, é alguém forte, que pode se manter ativo nas situações mais críticas de guerra. Podemos lembrar da Tasha Yar.',
    life: 130,
    maxLife: 200,
    damageRange: [5, 10],
    rechargeLife: 1.3,
  },
];

module.exports = officerTypes;
