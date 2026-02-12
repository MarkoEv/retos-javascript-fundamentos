function resultadoIgualdadDebil(a, b) {
  return a == b;
}

function resultadoDesigualdadDebil(a, b) {
  return a != b;
}

function resultadoIgualdadEstricta(a, b) {
  return a === b;
}

function resultadoDesigualdadEstricta(a, b) {
  return a !== b;
}

function sonIgualesConCoercion(a, b) {
  return a == b;
}

function sonIgualesValorYTipo(a, b) {
  return a === b;
}

function nullYUndefinedSonIgualesDebil() {
  return null == undefined;
}

module.exports = {
  resultadoIgualdadDebil,
  resultadoDesigualdadDebil,
  resultadoIgualdadEstricta,
  resultadoDesigualdadEstricta,
  sonIgualesConCoercion,
  sonIgualesValorYTipo,
  nullYUndefinedSonIgualesDebil,
};
