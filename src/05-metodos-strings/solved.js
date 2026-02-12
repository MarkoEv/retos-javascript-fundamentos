function contarCaracteres(texto) {
  return texto.length;
}

function extraerConSlice(texto, inicio, fin) {
  return fin === undefined ? texto.slice(inicio) : texto.slice(inicio, fin);
}

function extraerDesdeFinal(texto, n) {
  return texto.slice(-n);
}

function dividirEnPartes(texto, separador) {
  return texto.split(separador);
}

function limpiarEspacios(texto) {
  return texto.trim();
}

function normalizarMinusculas(texto) {
  return texto.toLowerCase();
}

function incluyeSubcadena(texto, subcadena) {
  return texto.includes(subcadena);
}

function empiezaCon(texto, prefijo) {
  return texto.startsWith(prefijo);
}

function terminaCon(texto, sufijo) {
  return texto.endsWith(sufijo);
}

function reemplazarPrimera(texto, buscar, reemplazo) {
  return texto.replace(buscar, reemplazo);
}

module.exports = {
  contarCaracteres,
  extraerConSlice,
  extraerDesdeFinal,
  dividirEnPartes,
  limpiarEspacios,
  normalizarMinusculas,
  incluyeSubcadena,
  empiezaCon,
  terminaCon,
  reemplazarPrimera,
};
