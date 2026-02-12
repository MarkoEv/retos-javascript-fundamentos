function numerosHastaN(n) {
  const resultado = [];
  for (let i = 0; i < n; i++) {
    resultado.push(i);
  }
  return resultado;
}

function contarConWhile(limite) {
  let contador = 0;
  while (contador < limite) {
    contador++;
  }
  return contador;
}

function contarConDoWhile(limite) {
  let contador = 0;
  do {
    contador++;
  } while (contador < limite);
  return contador;
}

function formatearNotasConFor(notas) {
  const resultado = [];
  for (let i = 0; i < notas.length; i++) {
    resultado.push(`Índice: ${i} -> Nota: ${notas[i]}`);
  }
  return resultado;
}

function tieneManzana(frutas) {
  for (const fruta of frutas) {
    if (fruta === "manzana") {
      return true;
    }
  }
  return false;
}

function clavesYValores(objeto) {
  const resultado = [];
  for (const clave in objeto) {
    resultado.push(`Clave: ${clave} -> Valor: ${objeto[clave]}`);
  }
  return resultado;
}

module.exports = {
  numerosHastaN,
  contarConWhile,
  contarConDoWhile,
  formatearNotasConFor,
  tieneManzana,
  clavesYValores,
};
