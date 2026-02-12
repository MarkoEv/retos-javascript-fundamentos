function calcularSuma(a, b) {
  return a + b;
}

function calcularResta(a, b) {
  return a - b;
}

function calcularMultiplicacion(a, b) {
  return a * b;
}

function calcularDivision(a, b) {
  return a / b;
}

function calcularModulo(a, b) {
  return a % b;
}

function calcularPotencia(base, exponente) {
  return base ** exponente;
}

function aplicarAsignacionSuma(valor, incremento) {
  let x = valor;
  x += incremento;
  return x;
}

function aplicarAsignacionResta(valor, decremento) {
  let x = valor;
  x -= decremento;
  return x;
}

function aplicarAsignacionMultiplicacion(valor, factor) {
  let x = valor;
  x *= factor;
  return x;
}

function aplicarAsignacionDivision(valor, divisor) {
  let x = valor;
  x /= divisor;
  return x;
}

function incrementarEnUno(contador) {
  return contador + 1;
}

function decrementarEnUno(contador) {
  return contador - 1;
}

function resultadoDivisionPorCero(positivo) {
  if (positivo) {
    return 1 / 0;
  }
  return -1 / 0;
}

function obtenerNaN() {
  return 0 / 0;
}

function esValorNaN(valor) {
  return Number.isNaN(valor);
}

module.exports = {
  calcularSuma,
  calcularResta,
  calcularMultiplicacion,
  calcularDivision,
  calcularModulo,
  calcularPotencia,
  aplicarAsignacionSuma,
  aplicarAsignacionResta,
  aplicarAsignacionMultiplicacion,
  aplicarAsignacionDivision,
  incrementarEnUno,
  decrementarEnUno,
  resultadoDivisionPorCero,
  obtenerNaN,
  esValorNaN,
};
