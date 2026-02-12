# Reto 03 - Operadores aritméticos en JavaScript

## Descripción

En este reto practicarás los operadores aritméticos (+, -, *, /, %, **), los operadores de asignación (+=, -=, *=, /=), el incremento y decremento, y los valores especiales Infinity, -Infinity y NaN en JavaScript.

## Instrucciones

Abre el archivo `challenge.js` y completa cada función según las indicaciones en los comentarios.

### Retos a completar

| # | Función | Qué practicas |
|---|---------|---------------|
| 1 | `calcularSuma(a, b)` | Suma con + |
| 2 | `calcularResta(a, b)` | Resta con - |
| 3 | `calcularMultiplicacion(a, b)` | Multiplicación con * |
| 4 | `calcularDivision(a, b)` | División con / |
| 5 | `calcularModulo(a, b)` | Módulo (residuo) con % |
| 6 | `calcularPotencia(base, exponente)` | Exponenciación con ** |
| 7 | `aplicarAsignacionSuma(valor, incremento)` | Operador += con let |
| 8 | `aplicarAsignacionResta(valor, decremento)` | Operador -= |
| 9 | `aplicarAsignacionMultiplicacion(valor, factor)` | Operador *= |
| 10 | `aplicarAsignacionDivision(valor, divisor)` | Operador /= |
| 11 | `incrementarEnUno(contador)` | Incremento en 1 (equivalente a ++) |
| 12 | `decrementarEnUno(contador)` | Decremento en 1 (equivalente a --) |
| 13 | `resultadoDivisionPorCero(positivo)` | Infinity y -Infinity al dividir por 0 |
| 14 | `obtenerNaN()` | Operación que produce NaN |
| 15 | `esValorNaN(valor)` | Detectar NaN con Number.isNaN |

## Conceptos clave

- **Operadores aritméticos**: +, -, *, /, % (módulo), ** (potencia).
- **Operadores de asignación**: +=, -=, *=, /= combinan cálculo y reasignación; usa `let` para poder cambiar el valor.
- **Incremento y decremento**: ++ y -- suman o restan 1 al valor actual (en este reto se practica el concepto devolviendo valor + 1 o valor - 1).
- **Infinity / -Infinity**: aparecen al dividir un número distinto de cero entre 0 (positivo o negativo).
- **NaN** (Not a Number): resultado de operaciones inválidas como 0/0 o `"hola" * 2`. Se detecta con `Number.isNaN(valor)`.

## Ejecutar los tests

Asegúrate de tener las dependencias instaladas:

```bash
npm install
```

Ejecuta los tests para verificar tu solución:

```bash
npx vitest src/03-operadores-aritmeticos
```

O en modo watch para desarrollo:

```bash
npx vitest --watch src/03-operadores-aritmeticos
```

Todos los tests deben pasar en verde para completar el reto.
