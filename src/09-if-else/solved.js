function esMayorDeEdad(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}

function mensajeEdad(edad) {
  if (edad >= 18) {
    return "eres mayor de edad";
  } else {
    return "eres menor de edad";
  }
}

function mensajeEdadDetallado(edad) {
  if (edad >= 19) {
    return "eres mayor de edad";
  } else if (edad === 18) {
    return "Tienes dieciocho años";
  } else {
    return "eres menor de edad";
  }
}

function cumpleMinimo(valor, minimo) {
  if (valor >= minimo) {
    return true;
  } else {
    return false;
  }
}

function nivelAcceso(edad) {
  if (edad >= 19) {
    return "adulto";
  } else if (edad === 18) {
    return "dieciocho";
  } else {
    return "menor";
  }
}

function puedeEntrar(edad, tienePermisoEspecial) {
  if (edad >= 18) {
    return true;
  } else if (tienePermisoEspecial) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  esMayorDeEdad,
  mensajeEdad,
  mensajeEdadDetallado,
  cumpleMinimo,
  nivelAcceso,
  puedeEntrar,
};
