function crearMensajeBienvenida(nombre, version) {
  return `Bienvenido a ${nombre}, versión ${version}.`;
}

function concatenarConMas(parte1, parte2) {
  return parte1 + " " + parte2;
}

function interpolarVariables(nombre, curso) {
  return `Curso de ${nombre}: ${curso}.`;
}

function calcularTotalComoString(precio, cantidad) {
  return `${precio * cantidad}`;
}

function tipoDeResultadoInterpolado() {
  return typeof `${1 + 2}`;
}

function crearNotaMultilinea(titulo, item1, item2) {
  return `${titulo}
- ${item1}
- ${item2}`;
}

module.exports = {
  crearMensajeBienvenida,
  concatenarConMas,
  interpolarVariables,
  calcularTotalComoString,
  tipoDeResultadoInterpolado,
  crearNotaMultilinea,
};
