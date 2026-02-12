function resultadoAnd(a, b) {
  return a && b;
}

function resultadoOr(a, b) {
  return a || b;
}

function resultadoNot(val) {
  return !val;
}

function puedeVerListaUsuarios(esAdmin, estaActivo) {
  return esAdmin && estaActivo;
}

function puedeAcceder(esUsuarioValido, tienePermisoEspecial) {
  return esUsuarioValido || tienePermisoEspecial;
}

function mostrarOpcionLimitada(esAdmin) {
  return !esAdmin;
}

module.exports = {
  resultadoAnd,
  resultadoOr,
  resultadoNot,
  puedeVerListaUsuarios,
  puedeAcceder,
  mostrarOpcionLimitada,
};
