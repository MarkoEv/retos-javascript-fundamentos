# Reto 11 - Bucles for, while y for...of en JavaScript

## Descripción

En este reto practicarás **bucles** en JavaScript: `for` (inicialización; condición; incremento), `while`, `do-while`, `for...of` para recorrer arrays y `for...in` para objetos. Aprenderás a usar el índice `i`, la propiedad `length`, template literals y condiciones dentro de los bucles.

## Instrucciones

Abre el archivo `challenge.js` y completa cada función según las indicaciones en los comentarios.

### Retos a completar

| # | Función | Qué practicas |
|---|---------|---------------|
| 1 | `numerosHastaN(n)` | `for` con índice `i`, retornar array de 0 a n-1 |
| 2 | `contarConWhile(limite)` | `while`: repetir mientras condición sea verdadera |
| 3 | `contarConDoWhile(limite)` | `do-while`: al menos una ejecución antes de validar |
| 4 | `formatearNotasConFor(notas)` | `for` con `length` e índice, template literals |
| 5 | `tieneManzana(frutas)` | `for...of` y condición `if` dentro del bucle |
| 6 | `clavesYValores(objeto)` | `for...in`, clave-valor con `objeto[clave]` |

## Conceptos clave

- **for**: `for (let i = 0; i < n; i++)` — inicialización; condición; incremento. `i` suele ser el índice.
- **while**: repite el bloque mientras la condición sea verdadera; útil cuando no sabes cuántas iteraciones habrá.
- **do-while**: ejecuta el bloque al menos una vez y luego valida la condición.
- **for...of**: itera sobre los **valores** de un array (o iterable); no necesitas el índice.
- **for...in**: itera sobre las **claves** de un objeto; el valor se obtiene con `objeto[clave]`.
- **length**: número de elementos en un array (o caracteres en un string). Úsalo como tope en `for`.

## Ejecutar los tests

Asegúrate de tener las dependencias instaladas:

```bash
npm install
```

Ejecuta los tests para verificar tu solución:

```bash
npx vitest src/11-bucles-for-while
```

O en modo watch para desarrollo:

```bash
npx vitest --watch src/11-bucles-for-while
```

Todos los tests deben pasar en verde para completar el reto.
