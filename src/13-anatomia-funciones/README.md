# Reto 13 - Anatomía de funciones en JavaScript

## Descripción

En este reto practicarás la **anatomía de las funciones** en JavaScript: funciones declaradas con retorno, **parámetros y argumentos**, **arrow functions** (expresión de una línea) y **parámetros por defecto**, junto con el uso de `Date.now()` para timestamps.

## Instrucciones

Abre el archivo `challenge.js` y completa cada función según las indicaciones en los comentarios.

### Retos a completar

| # | Función | Qué practicas |
|---|---------|---------------|
| 1 | `saludar(nombre)` | Función declarada, template literal y return |
| 2 | `crearUsuario(nombre, edad)` | Parámetros, argumentos y retorno de objeto |
| 3 | `multiplicar(a, b)` | Arrow function / retorno de una expresión |
| 4 | `crearNota(contenido, titulo)` | Parámetro por defecto y `Date.now()` |

## Conceptos clave

- **Función**: bloque reutilizable que recibe datos, ejecuta una tarea y retorna un resultado. Solo se ejecuta al ser invocada.
- **Parámetros**: variables definidas en la función. **Argumentos**: valores que pasas al llamarla.
- **Arrow function**: sintaxis concisa con `=>`; en una sola expresión el retorno es implícito.
- **Parámetros por defecto**: `function fn(a, b = 'valor')` asigna `b` si no se pasa el argumento.
- **Date.now()**: devuelve el tiempo en milisegundos (Unix timestamp).

## Ejecutar los tests

Asegúrate de tener las dependencias instaladas:

```bash
npm install
```

Ejecuta los tests para verificar tu solución:

```bash
npx vitest src/13-anatomia-funciones
```

O en modo watch para desarrollo:

```bash
npx vitest --watch src/13-anatomia-funciones
```

Todos los tests deben pasar en verde para completar el reto.
