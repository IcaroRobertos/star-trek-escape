const spaceship = {
  1: {
    frente: 6,
    direita: 2,
  },
  2: {
    esquerda: 1,
    frente: 7,
    direita: 3,
  },
  3: {
    esquerda: 2,
    frente: 12,
    direita: 4,
  },
  4: {
    esquerda: 3,
    frente: 8,
    direita: 5,
  },
  5: {
    esquerda: 4,
    frente: 9,
  },
  6: {
    frente: 17,
    direita: 7,
    tras: 1,
  },
  7: {
    esquerda: 6,
    tras: 2,
  },
  8: {
    direita: 9,
    tras: 4,
  },
  9: {
    frente: 24,
    esquerda: 8,
    tras: 5,
  },
  10: {
    frente: 18,
    direita: 11,
  },
  11: {
    esquerda: 10,
    frente: 15,
    direita: 12,
  },
  12: {
    esquerda: 11,
    direita: 13,
  },
  13: {
    esquerda: 12,
    frente: 16,
    direita: 14,
  },
  14: {
    esquerda: 13,
    frente: 23,
  },
  15: {
    frente: 19,
    direita: 16,
    tras: 11,
  },
  16: {
    frente: 22,
    esquerda: 15,
    tras: 13,
  },
  17: {
    frente: 32,
    direita: 18,
    tras: 6,
  },
  18: {
    frente: 27,
    direita: 19,
    esquerda: 17,
    tras: 10,
  },
  19: {
    frente: 25,
    direita: 20,
    esquerda: 18,
    tras: 15,
  },
  20: {
    esquerda: 19,
  },
  21: {
    direita: 22,
  },
  22: {
    frente: 26,
    direita: 23,
    esquerda: 21,
    tras: 16,
  },
  23: {
    frente: 31,
    direita: 24,
    esquerda: 22,
    tras: 16,
  },
  24: {
    frente: 35,
    esquerda: 23,
    tras: 9,
  },
  25: {
    frente: 28,
    direita: 26,
    tras: 19,
  },
  26: {
    frente: 30,
    esquerda: 25,
    tras: 22,
  },
  27: {
    direita: 28,
    tras: 18,
  },
  28: {
    esquerda: 27,
    direita: 29,
    tras: 25,
  },
  29: {
    frente: 38,
    esquerda: 28,
    direita: 30,
  },
  30: {
    esquerda: 29,
    direita: 31,
    tras: 26,
  },
  31: {
    esquerda: 30,
    tras: 23,
  },
  32: {
    frente: 36,
    esquerda: 33,
  },
  33: {
    frente: 37,
    direita: 32,
  },
  34: {
    frente: 39,
    direita: 35,
  },
  35: {
    frente: 40,
    esquerda: 34,
  },
  36: {
    direita: 37,
    tras: 32,
  },
  37: {
    direita: 38,
    esquerda: 36,
    tras: 33,
  },
  38: {
    esquerda: 37,
    direita: 39,
    tras: 29,
  },
  39: {
    esquerda: 38,
    direita: 40,
    tras: 34,
  },
  40: {
    direita: 39,
    tras: 35,
  },
};

module.exports = spaceship;
