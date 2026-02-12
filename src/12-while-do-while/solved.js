function numerosConWhile(n) {
  const resultado = [];
  let contador = 0;
  while (contador < n) {
    resultado.push(contador);
    contador++;
  }
  return resultado;
}

function contarHastaLimite(limite) {
  let contador = 0;
  while (contador < limite) {
    contador++;
  }
  return contador;
}

function doWhileAlMenosUnaVez(limite) {
  let contador = 0;
  do {
    contador++;
  } while (contador < limite);
  return contador;
}

function mensajesEntradaDoWhile(limite) {
  const mensajes = [];
  let contador = 0;
  do {
    mensajes.push(`Entra en ${contador}`);
    contador++;
  } while (contador < limite);
  return mensajes;
}

module.exports = {
  numerosConWhile,
  contarHastaLimite,
  doWhileAlMenosUnaVez,
  mensajesEntradaDoWhile,
};
