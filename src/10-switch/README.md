# Reto 10 - Switch en JavaScript: cuándo y cómo usarlo

## Descripción

En este reto practicarás la estructura **switch** para comparar una misma expresión con varios valores. Aprenderás a usar `case`, `break` y `default`, y a agrupar casos que comparten la misma acción para evitar repetir código. Ideal cuando tienes muchas opciones discretas y una sola expresión a evaluar.

## Instrucciones

Abre el archivo `challenge.js` y completa cada función según las indicaciones en los comentarios.

### Retos a completar

| # | Función | Qué practicas |
|---|---------|---------------|
| 1 | `tipoDeDia(dia)` | Switch con casos agrupados: día laboral vs fin de semana |
| 2 | `mensajeOpcion(opcion)` | `case`, `break` y `default` para opciones a, b, c |
| 3 | `categoriaPorCodigo(codigo)` | Agrupar varios `case` en un mismo resultado (E1, E2 → electrónica) |
| 4 | `diasDelMes(mes)` | Agrupar meses por cantidad de días (31, 30, 28) |
| 5 | `nivelDeUsuario(nivel)` | Switch con default para nivel no válido |

## Conceptos clave

- **switch (expresión)**: Compara una misma expresión con varios valores.
- **case valor**: Ejecuta el bloque si coincide con la expresión; usa dos puntos (`:`), no punto y coma.
- **break**: Corta la ejecución y evita que se ejecute el siguiente caso (fall-through).
- **default**: Opción cuando no coincide ningún caso.
- **Agrupar casos**: Varios `case` seguidos sin `break` comparten el mismo bloque de código.

## Ejecutar los tests

Asegúrate de tener las dependencias instaladas:

```bash
npm install
```

Ejecuta los tests para verificar tu solución:

```bash
npx vitest src/10-switch
```

O en modo watch para desarrollo:

```bash
npx vitest --watch src/10-switch
```

Todos los tests deben pasar en verde para completar el reto.
