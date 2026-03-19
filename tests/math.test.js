const { sumar, multiplicar, esPar } = require('../src/math');

describe('sumar', () => {
  test('suma dos números positivos', () => {
    expect(sumar(2, 3)).toBe(5);
  });
  test('suma con número negativo', () => {
    expect(sumar(-1, 4)).toBe(3);
  });
  test('lanza error si no son números', () => {
    expect(() => sumar('a', 2)).toThrow('Los argumentos deben ser números');
  });
});

describe('multiplicar', () => {
  test('multiplica dos números', () => {
    expect(multiplicar(3, 4)).toBe(12);
  });
  test('multiplica por cero', () => {
    expect(multiplicar(5, 0)).toBe(0);
  });
  test('lanza error si no son números', () => {
    expect(() => multiplicar('a', 2)).toThrow('Los argumentos deben ser números');
  });
});

describe('esPar', () => {
  test('retorna true para número par', () => {
    expect(esPar(4)).toBe(true);
  });
  test('retorna false para número impar', () => {
    expect(esPar(7)).toBe(false);
  });
  test('lanza error si no es número', () => {
    expect(() => esPar('x')).toThrow('El argumento debe ser un número');
  });
});