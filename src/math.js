function sumar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Los argumentos deben ser números');
  }
  return a + b;
}

function multiplicar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Los argumentos deben ser números');
  }
  return a * b;
}

function esPar(n) {
  if (typeof n !== 'number') {
    throw new Error('El argumento debe ser un número');
  }
  return n % 2 === 0;
}

module.exports = { sumar, multiplicar, esPar };