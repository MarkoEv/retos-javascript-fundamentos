function tipoDeDia(dia) {
  switch (dia) {
    case "lunes":
    case "martes":
    case "miércoles":
    case "jueves":
    case "viernes":
      return "día laboral";
    case "sábado":
    case "domingo":
      return "fin de semana";
    default:
      return "día no válido";
  }
}

function mensajeOpcion(opcion) {
  switch (opcion) {
    case "a":
      return "Opción A";
    case "b":
      return "Opción B";
    case "c":
      return "Opción C";
    default:
      return "opción no válida";
  }
}

function categoriaPorCodigo(codigo) {
  switch (codigo) {
    case "E1":
    case "E2":
      return "electrónica";
    case "H1":
      return "hogar";
    default:
      return "desconocido";
  }
}

function diasDelMes(mes) {
  switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2:
      return 28;
    default:
      return 0;
  }
}

function nivelDeUsuario(nivel) {
  switch (nivel) {
    case "principiante":
      return "acceso básico";
    case "intermedio":
      return "acceso estándar";
    case "avanzado":
      return "acceso completo";
    default:
      return "nivel no válido";
  }
}

module.exports = {
  tipoDeDia,
  mensajeOpcion,
  categoriaPorCodigo,
  diasDelMes,
  nivelDeUsuario,
};
