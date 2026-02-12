# Reto 07 - Igualdad débil vs estricta en JavaScript

## Descripción

En este reto practicarás la diferencia entre **igualdad débil** (`==`, `!=`) y **igualdad estricta** (`===`, `!==`) en JavaScript. Verás cómo la coerción de tipos afecta las comparaciones con `==` y por qué se recomienda usar `===` y `!==` para comparaciones predecibles y seguras.

## Instrucciones

Abre el archivo `challenge.js` y completa cada función según las indicaciones en los comentarios.

### Retos a completar

| # | Función | Qué practicas |
|---|---------|---------------|
| 1 | `resultadoIgualdadDebil(a, b)` | Igualdad débil `==` con coerción de tipos |
| 2 | `resultadoDesigualdadDebil(a, b)` | Desigualdad débil `!=` con coerción |
| 3 | `resultadoIgualdadEstricta(a, b)` | Igualdad estricta `===` (valor y tipo) |
| 4 | `resultadoDesigualdadEstricta(a, b)` | Desigualdad estricta `!==` |
| 5 | `sonIgualesConCoercion(a, b)` | Cuándo dos valores son iguales con `==` |
| 6 | `sonIgualesValorYTipo(a, b)` | Cuándo dos valores son estrictamente iguales con `===` |
| 7 | `nullYUndefinedSonIgualesDebil()` | Caso especial: `null == undefined` |

## Conceptos clave

- **Igualdad débil (`==`, `!=`)**: El motor convierte tipos antes de comparar; por eso `5 == '5'` y `true == 1` pueden dar `true`. Puede generar resultados inesperados.
- **Igualdad estricta (`===`, `!==`)**: Compara valor y tipo sin coerción. Es la práctica recomendada para evitar sorpresas y depurar con claridad.
- **null y undefined**: Con `==` se consideran iguales (`null == undefined` es `true`); con `===` son distintos.

## Ejecutar los tests

Asegúrate de tener las dependencias instaladas:

```bash
npm install
```

Ejecuta los tests para verificar tu solución:

```bash
npx vitest src/07-igualdad-debil-estricta
```

O en modo watch para desarrollo:

```bash
npx vitest --watch src/07-igualdad-debil-estricta
```

Todos los tests deben pasar en verde para completar el reto.
