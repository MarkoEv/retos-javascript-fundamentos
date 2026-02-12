function resultadoConcatenacionMas(str, num) {
  return str + num;
}

function resultadoRestaConString(str, num) {
  return str - num;
}

function booleanoMasUno(bool) {
  return bool + 1;
}

function convertirStringANumero(str) {
  return Number(str);
}

function parsearEnteroYDecimal(strEntero, strDecimal) {
  return {
    entero: parseInt(strEntero, 10),
    decimal: parseFloat(strDecimal),
  };
}

function convertirNumeroAString(num) {
  return String(num);
}

function convertirABooleano(val) {
  return Boolean(val);
}

module.exports = {
  resultadoConcatenacionMas,
  resultadoRestaConString,
  booleanoMasUno,
  convertirStringANumero,
  parsearEnteroYDecimal,
  convertirNumeroAString,
  convertirABooleano,
};
