# Reto 04 - Template literals en JavaScript: sintaxis y uso práctico

## Descripción

En este reto practicarás los **template literals** (comillas invertidas `` ` ``) de ECMAScript 6: interpolación con `${}`, expresiones dentro del template, contraste con la concatenación usando `+`, y texto multilínea.

## Instrucciones

Abre el archivo `challenge.js` y completa cada función según las indicaciones en los comentarios.

### Retos a completar

| # | Función | Qué practicas |
|---|---------|---------------|
| 1 | `crearMensajeBienvenida(nombre, version)` | Interpolación con template literals |
| 2 | `concatenarConMas(parte1, parte2)` | Concatenación tradicional con + |
| 3 | `interpolarVariables(nombre, curso)` | Interpolación de variables en una frase |
| 4 | `calcularTotalComoString(precio, cantidad)` | Expresiones dentro de `${}` |
| 5 | `tipoDeResultadoInterpolado()` | typeof y que la interpolación produce string |
| 6 | `crearNotaMultilinea(titulo, item1, item2)` | Texto multilínea con template literals |

## Conceptos clave

- **Template literals**: se escriben con comillas invertidas (`` ` ``). Permiten interpolar variables con `${variable}` y evaluar expresiones `${expresion}`.
- **Interpolación**: el resultado de `${...}` se convierte en string; por eso `typeof \`${1 + 2}\`` es `"string"`.
- **Concatenación con +**: sigue siendo válida, pero en frases largas los template literals suelen ser más legibles y menos propensos a errores (espacios olvidados, etc.).
- **Multilínea**: dentro de un template literal los saltos de línea forman parte del string; no hace falta usar `\n`.

## Ejecutar los tests

Asegúrate de tener las dependencias instaladas:

```bash
npm install
```

Ejecuta los tests para verificar tu solución:

```bash
npx vitest src/04-template-literals
```

O en modo watch para desarrollo:

```bash
npx vitest --watch src/04-template-literals
```

Todos los tests deben pasar en verde para completar el reto.
