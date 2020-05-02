const spaceship = {
  1: {
    frente: '6',
    direita: '2',
  },
  2: {
    esquerda: '1',
    frente: '7',
    direita: '3',
  },
  3: {
    esquerda: '2',
    frente: '12',
    direita: '4',
  },
  4: {
    esquerda: '3',
    frente: '8',
    direita: '5',
  },
  5: {
    esquerda: '4',
    frente: '9',
  },
  6: {
    frente: '17',
    direita: '7',
    atras: '1',
  },
  7: {
    esquerda: '6',
    atras: '2',
  },
  8: {
    direita: '9',
    atras: '4',
  },
  9: {
    frente: '24',
    esquerda: '8',
    atras: '5',
  },
  10: {
    frente: '18',
    direita: '11',
  },
  11: {
    esquerda: '10',
    frente: '15',
    direita: '12',
  },
  12: {
    esquerda: '11',
    direita: '13',
    atras: '3',
  },
  13: {
    esquerda: '12',
    frente: '16',
    direita: '14',
  },
  14: {
    esquerda: '13',
    frente: '23',
  },
  15: {
    frente: '19',
    direita: '16',
    atras: '11',
  },
  16: {
    frente: '22',
    esquerda: '15',
    atras: '13',
  },
  17: {
    frente: '32',
    direita: '18',
    atras: '6',
  },
  18: {
    frente: '27',
    direita: '19',
    esquerda: '17',
    atras: '10',
  },
  19: {
    frente: '25',
    direita: '20',
    esquerda: '18',
    atras: '15',
  },
  20: {
    esquerda: '19',
  },
  21: {
    direita: '22',
  },
  22: {
    frente: '26',
    direita: '23',
    esquerda: '21',
    atras: '16',
  },
  23: {
    frente: '31',
    direita: '24',
    esquerda: '22',
    atras: '14',
  },
  24: {
    frente: '35',
    esquerda: '23',
    atras: '9',
  },
  25: {
    frente: '28',
    direita: '26',
    atras: '19',
  },
  26: {
    frente: '30',
    esquerda: '25',
    atras: '22',
  },
  27: {
    direita: '28',
    atras: '18',
  },
  28: {
    esquerda: '27',
    direita: '29',
    atras: '25',
  },
  29: {
    frente: '38',
    esquerda: '28',
    direita: '30',
  },
  30: {
    esquerda: '29',
    direita: '31',
    atras: '26',
  },
  31: {
    esquerda: '30',
    atras: '23',
  },
  32: {
    frente: '36',
    esquerda: '33',
    atras: '17',
  },
  33: {
    frente: '37',
    direita: '32',
  },
  34: {
    frente: '39',
    direita: '35',
  },
  35: {
    frente: '40',
    esquerda: '34',
    atras: '24',
  },
  36: {
    direita: '37',
    atras: '32',
  },
  37: {
    direita: '38',
    esquerda: '36',
    atras: '33',
  },
  38: {
    esquerda: '37',
    direita: '39',
    atras: '29',
  },
  39: {
    esquerda: '38',
    direita: '40',
    atras: '34',
  },
  40: {
    esquerda: '39',
    atras: '35',
  },
};

module.exports = spaceship;
