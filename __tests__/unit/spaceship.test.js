const spaceship = require('../../src/spaceship/spaceship');

describe('Test Spaceship', () => {
  it('should test connections between points of spaceship', () => {
    const shipKeys = Object.keys(spaceship);

    shipKeys.map((key) => {
      if (spaceship[key].frente) {
        expect(spaceship[spaceship[key].frente].atras).toEqual(key);
      }
      if (spaceship[key].atras) {
        expect(spaceship[spaceship[key].atras].frente).toEqual(key);
      }
      if (spaceship[key].esquerda) {
        expect(spaceship[spaceship[key].esquerda].direita).toEqual(key);
      }
      if (spaceship[key].direita) {
        expect(spaceship[spaceship[key].direita].esquerda).toEqual(key);
      }

      return true;
    });
  });
});
