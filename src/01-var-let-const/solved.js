function obtenerPI() {
  const PI = 3.14159;
  return PI;
}

function obtenerContador() {
  let contador = 0;
  contador = 5;
  return contador;
}

function obtenerNombreCurso() {
  const NOMBRE_CURSO = "Fundamentos de JavaScript";
  return NOMBRE_CURSO;
}

function reasignarMensaje() {
  let mensaje = "hola";
  const inicial = mensaje;
  mensaje = "adiós";
  return { inicial, final: mensaje };
}

function calcularTotal() {
  const precioBase = 100;
  let descuento = 10;
  descuento = 25;
  const total = precioBase - descuento;
  return { precioBase, descuento, total };
}

function identificarTipos() {
  const edad = 25;
  const nombre = "JavaScript";
  const activo = true;

  return {
    tipoEdad: typeof edad,
    tipoNombre: typeof nombre,
    tipoActivo: typeof activo,
  };
}

function demostrarHoisting() {
  var antes = nombre;
  var nombre = "Oscar";
  var despues = nombre;
  return { antes, despues };
}

module.exports = {
  obtenerPI,
  obtenerContador,
  obtenerNombreCurso,
  reasignarMensaje,
  calcularTotal,
  identificarTipos,
  demostrarHoisting,
};
