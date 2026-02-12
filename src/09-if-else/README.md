# Reto 09 - If, else y else if en JavaScript

## Descripción

En este reto practicarás el **control de flujo condicional** con `if`, `else` y `else if`. Aprenderás a evaluar expresiones y ejecutar un bloque u otro según la condición, aplicando operadores de comparación (`>=`, `>`, `<=`, `<`, `===`) para reglas de negocio como mayoría de edad, permisos y umbrales de acceso.

## Instrucciones

Abre el archivo `challenge.js` y completa cada función según las indicaciones en los comentarios.

### Retos a completar

| # | Función | Qué practicas |
|---|---------|---------------|
| 1 | `esMayorDeEdad(edad)` | Condición simple con `if` y `else` (edad >= 18) |
| 2 | `mensajeEdad(edad)` | Retornar mensaje distinto según la condición |
| 3 | `mensajeEdadDetallado(edad)` | `else if` para caso exacto (edad === 18) y prioridad de condiciones |
| 4 | `cumpleMinimo(valor, minimo)` | Validar umbral con operador `>=` |
| 5 | `nivelAcceso(edad)` | Múltiples ramas con `if`, `else if` y `else` |
| 6 | `puedeEntrar(edad, tienePermisoEspecial)` | Acceso por edad o permiso (condiciones combinadas) |

## Conceptos clave

- **if / else**: Evalúa una expresión; si es verdadera ejecuta un bloque, si no ejecuta el de `else`.
- **else if**: Permite evaluar más condiciones en orden; útil para casos intermedios antes del `else`.
- **Operadores de comparación**: `>=`, `>`, `<=`, `<` para magnitudes; `===` para igualdad estricta (tipo y valor).
- **Orden de evaluación**: Prioriza la condición más restrictiva o específica primero para que el flujo sea correcto.

## Ejecutar los tests

Asegúrate de tener las dependencias instaladas:

```bash
npm install
```

Ejecuta los tests para verificar tu solución:

```bash
npx vitest src/09-if-else
```

O en modo watch para desarrollo:

```bash
npx vitest --watch src/09-if-else
```

Todos los tests deben pasar en verde para completar el reto.
