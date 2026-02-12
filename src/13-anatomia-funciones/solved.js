function saludar(nombre) {
  return `Hola, ${nombre}`;
}

function crearUsuario(nombre, edad) {
  return {
    nombre,
    edad,
  };
}

function multiplicar(a, b) {
  return a * b;
}

function crearNota(contenido, titulo = "sin título") {
  return {
    titulo,
    contenido,
    creado: Date.now(),
  };
}

module.exports = {
  saludar,
  crearUsuario,
  multiplicar,
  crearNota,
};
