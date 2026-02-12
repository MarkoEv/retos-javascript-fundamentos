# Reto 08 - Operadores lógicos AND, OR y NOT en JavaScript

## Descripción

En este reto practicarás los **operadores lógicos** en JavaScript: **AND** (`&&`), **OR** (`||`) y **NOT** (`!`). Sirven para combinar, evaluar y negar condiciones en validaciones, permisos (administrador, usuario activo) y flujos de decisión.

## Instrucciones

Abre el archivo `challenge.js` y completa cada función según las indicaciones en los comentarios.

### Retos a completar

| # | Función | Qué practicas |
|---|---------|---------------|
| 1 | `resultadoAnd(a, b)` | AND: true solo si ambas expresiones son true |
| 2 | `resultadoOr(a, b)` | OR: true si al menos una expresión es true |
| 3 | `resultadoNot(val)` | NOT: invierte el valor booleano |
| 4 | `puedeVerListaUsuarios(esAdmin, estaActivo)` | Validación con AND (admin y activo) |
| 5 | `puedeAcceder(esUsuarioValido, tienePermisoEspecial)` | Validación con OR (cualquiera válida) |
| 6 | `mostrarOpcionLimitada(esAdmin)` | Validación con NOT (si no es admin) |

## Conceptos clave

- **AND (`&&`)**: Devuelve `true` solo si las dos condiciones son verdaderas. Útil cuando todas las validaciones deben cumplirse (ej.: ser admin y estar activo).
- **OR (`||`)**: Devuelve `true` si al menos una condición es verdadera. Útil cuando cualquier opción válida permite continuar.
- **NOT (`!`)**: Invierte el valor: `true` → `false`, `false` → `true`. Útil para bifurcar el flujo con reglas opuestas (ej.: si no es admin, mostrar opción limitada).

## Ejecutar los tests

Asegúrate de tener las dependencias instaladas:

```bash
npm install
```

Ejecuta los tests para verificar tu solución:

```bash
npx vitest src/08-logic
```

O en modo watch para desarrollo:

```bash
npx vitest --watch src/08-logic
```

Todos los tests deben pasar en verde para completar el reto.
