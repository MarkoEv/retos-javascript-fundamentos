function identificarPrimitivos() {
  const texto = "hola";
  const numero = 42;
  const booleano = true;
  const nulo = null;
  const indefinido = undefined;
  const simbolo = Symbol("id");
  const grande = 123n;

  return {
    texto: typeof texto,
    numero: typeof numero,
    booleano: typeof booleano,
    nulo: typeof nulo,
    indefinido: typeof indefinido,
    simbolo: typeof simbolo,
    grande: typeof grande,
  };
}

function diferenciarStringNumber(valor) {
  return {
    tipo: typeof valor,
    esString: typeof valor === "string",
    esNumber: typeof valor === "number",
  };
}

function explorarNull() {
  const nulo = null;
  return {
    valor: nulo,
    tipo: typeof nulo,
    esNull: nulo === null,
  };
}

function compararNullUndefined() {
  let sinAsignar;
  const vacio = null;
  return {
    sinAsignar,
    vacio,
    tipoSinAsignar: typeof sinAsignar,
    tipoVacio: typeof vacio,
    sonIguales: sinAsignar == vacio,
    sonEstrictamenteIguales: sinAsignar === vacio,
  };
}

function crearSymbolYBigInt() {
  const miSymbol = Symbol("miID");
  const miBigInt = 9007199254740991n;
  return {
    tipoSymbol: typeof miSymbol,
    tipoBigInt: typeof miBigInt,
    descripcionSymbol: miSymbol.description,
    valorBigInt: miBigInt,
  };
}

function crearObjeto() {
  const persona = { nombre: "Juan", edad: 42, activo: true };
  return {
    persona,
    tipoPersona: typeof persona,
    propiedades: Object.keys(persona),
  };
}

function trabajarConArreglos() {
  const mezcla = [1, "dos", true, null];
  return {
    arreglo: mezcla,
    esArreglo: Array.isArray(mezcla),
    largo: mezcla.length,
    tipos: mezcla.map((el) => typeof el),
  };
}

function funcionComoValor() {
  const saludar = function (nombre) {
    return `Hola, ${nombre}!`;
  };
  return {
    tipoFuncion: typeof saludar,
    resultado: saludar("JavaScript"),
  };
}

function clasificarTipo(valor) {
  if (valor === null) {
    return { valor, tipo: typeof valor, clasificacion: "primitivo" };
  }
  const tipo = typeof valor;
  if (tipo === "object" || tipo === "function") {
    return { valor, tipo, clasificacion: "complejo" };
  }
  return { valor, tipo, clasificacion: "primitivo" };
}

module.exports = {
  identificarPrimitivos,
  diferenciarStringNumber,
  explorarNull,
  compararNullUndefined,
  crearSymbolYBigInt,
  crearObjeto,
  trabajarConArreglos,
  funcionComoValor,
  clasificarTipo,
};
