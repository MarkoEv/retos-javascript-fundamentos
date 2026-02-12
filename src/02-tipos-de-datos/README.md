# Reto 02 - Tipos de datos en JavaScript: primitivos vs complejos

## Descripción

En este reto practicarás los tipos de datos en JavaScript. Aprenderás a declarar y distinguir los 7 tipos primitivos (`string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`), a usar `typeof` para identificarlos y a trabajar con tipos complejos como objetos, arrays y funciones.

## Instrucciones

Abre el archivo `challenge.js` y completa cada función según las indicaciones en los comentarios.

### Retos a completar

| # | Función | Qué practicas |
|---|---------|---------------|
| 1 | `identificarPrimitivos()` | Declarar los 7 tipos primitivos y obtener su `typeof` |
| 2 | `diferenciarStringNumber(valor)` | Distinguir entre `"42"` (string) y `42` (number) |
| 3 | `explorarNull()` | Entender el caso especial de `typeof null` |
| 4 | `compararNullUndefined()` | Diferencias entre `null` y `undefined` con `==` y `===` |
| 5 | `crearSymbolYBigInt()` | Crear un `Symbol` y un `BigInt` |
| 6 | `crearObjeto()` | Crear un objeto con pares clave-valor |
| 7 | `trabajarConArreglos()` | Crear un array con tipos mezclados y usar `Array.isArray` |
| 8 | `funcionComoValor()` | Asignar una función a una constante y ejecutarla |
| 9 | `clasificarTipo(valor)` | Clasificar cualquier valor como primitivo o complejo |

## Conceptos clave

- **Tipos primitivos**: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`. Son valores simples e inmutables.
- **Tipos complejos**: objetos, arrays y funciones. Agrupan y estructuran datos.
- **`typeof`**: operador que devuelve el tipo de un valor como string. Caso especial: `typeof null` devuelve `"object"`.
- **`const` y `let`**: usa `const` por defecto; usa `let` solo si el valor debe cambiar.
- **`Symbol`**: crea identificadores únicos. Útil para claves de objeto que no colisionen.
- **`BigInt`**: representa enteros de precisión arbitraria (terminan en `n`).

## Ejecutar los tests

Asegúrate de tener las dependencias instaladas:

```bash
npm install
```

Ejecuta los tests para verificar tu solución:

```bash
npx vitest src/02-tipos-de-datos
```

O en modo watch para desarrollo:

```bash
npx vitest --watch src/02-tipos-de-datos
```

Todos los tests deben pasar en verde para completar el reto.
