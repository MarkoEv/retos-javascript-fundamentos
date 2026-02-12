# Reto 01 - Var, Let y Const: qué cambia en JavaScript

## Descripción

En este reto pondrás en práctica la declaración de variables usando `var`, `let` y `const`. Aprenderás cuándo usar cada una, cómo funciona la reasignación, los tipos de dato y el comportamiento del **hoisting**.

## Instrucciones

Abre el archivo `challenge.js` y completa cada función según las indicaciones en los comentarios.

### Retos a completar

| # | Función | Qué practicas |
|---|---------|---------------|
| 1 | `obtenerPI()` | Declarar una constante con `const` |
| 2 | `obtenerContador()` | Declarar con `let` y reasignar |
| 3 | `obtenerNombreCurso()` | Constante de tipo string |
| 4 | `reasignarMensaje()` | Reasignación de strings con `let` |
| 5 | `calcularTotal()` | Combinar `const` y `let` en un cálculo |
| 6 | `identificarTipos()` | Usar `typeof` para identificar tipos de dato |
| 7 | `demostrarHoisting()` | Entender el hoisting con `var` |

## Conceptos clave

- **`const`**: no permite redeclarar ni reasignar. Úsala por defecto.
- **`let`**: no permite redeclarar, pero sí reasignar. Úsala cuando el valor cambie.
- **`var`**: permite redeclarar y reasignar. Evítala en código moderno.
- **Hoisting**: el motor de JavaScript "eleva" las declaraciones con `var`, asignándoles `undefined` antes de ejecutar el código.

## Ejecutar los tests

Asegúrate de tener las dependencias instaladas:

```bash
npm install
```

Ejecuta los tests para verificar tu solución:

```bash
npx vitest src/01-var-let-const
```

O en modo watch para desarrollo:

```bash
npx vitest --watch src/01-var-let-const
```

Todos los tests deben pasar en verde para completar el reto.
