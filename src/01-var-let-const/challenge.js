// ============================================
// Reto: Var, Let y Const en JavaScript
// ============================================
// Completa cada función según las instrucciones.
// Ejecuta los tests con: npx vitest src/01-var-let-const
// ============================================

// --- Reto 1: Declarar una constante ---
// Declara una constante llamada PI con el valor 3.14159
// y retórnala.
function obtenerPI() {
  // Tu código aquí
}

// --- Reto 2: Reasignación con let ---
// Declara una variable con let llamada "contador" e inicialízala en 0.
// Luego reasígnala a 5.
// Retorna el valor final de contador.
function obtenerContador() {
  // Tu código aquí
}

// --- Reto 3: Constante de texto ---
// Declara una constante llamada NOMBRE_CURSO con el valor
// "Fundamentos de JavaScript" y retórnala.
function obtenerNombreCurso() {
  // Tu código aquí
}

// --- Reto 4: Reasignación de strings ---
// Declara una variable con let llamada "mensaje" e inicialízala con "hola".
// Luego reasígnala a "adiós".
// Retorna un objeto con las propiedades:
//   { inicial: "hola", final: "adiós" }
// Pista: guarda el valor inicial antes de reasignar.
function reasignarMensaje() {
  // Tu código aquí
}

// --- Reto 5: Cálculo con const y let ---
// Declara una constante precioBase con valor 100.
// Declara una variable descuento con let e inicialízala en 10.
// Reasigna descuento a 25.
// Calcula el total como: precioBase - descuento.
// Retorna un objeto: { precioBase, descuento, total }
function calcularTotal() {
  // Tu código aquí
}

// --- Reto 6: Identificar tipos de dato ---
// Dentro de la función ya están declaradas tres variables.
// Completa el return usando typeof para cada una.
function identificarTipos() {
  const edad = 25;
  const nombre = "JavaScript";
  const activo = true;

  return {
    tipoEdad: undefined, // Reemplaza undefined por typeof de edad
    tipoNombre: undefined, // Reemplaza undefined por typeof de nombre
    tipoActivo: undefined, // Reemplaza undefined por typeof de activo
  };
}

// --- Reto 7: Hoisting ---
// Esta función simula el comportamiento del hoisting con var.
// Sin modificar el orden de las líneas, haz que la función
// retorne un objeto con:
//   { antes: undefined, despues: "Oscar" }
// Pista: declara "nombre" con var después del primer acceso.
function demostrarHoisting() {
  // Tu código aquí
  // Paso 1: guarda el valor de "nombre" en una variable "antes"
  // Paso 2: declara var nombre = "Oscar"
  // Paso 3: guarda el valor de "nombre" en una variable "despues"
  // Paso 4: retorna { antes, despues }
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
