# Reto 12 - while en JavaScript: evita bucles infinitos

## Descripción

En este reto practicarás **bucles while y do...while** en JavaScript. Aprenderás a definir una condición de salida clara, a usar un contador que se actualice en cada iteración para evitar bucles infinitos, y a aprovechar que `do...while` ejecuta el bloque al menos una vez antes de evaluar la condición.

## Instrucciones

Abre el archivo `challenge.js` y completa cada función según las indicaciones en los comentarios.

### Retos a completar

| # | Función | Qué practicas |
|---|---------|---------------|
| 1 | `numerosConWhile(n)` | `while` con contador, incremento seguro y condición de salida |
| 2 | `contarHastaLimite(limite)` | `while`: modificar el contador en cada vuelta para que el ciclo termine |
| 3 | `doWhileAlMenosUnaVez(limite)` | `do...while`: ejecución al menos una vez antes de validar |
| 4 | `mensajesEntradaDoWhile(limite)` | `do...while` con template literals y array de mensajes |

## Conceptos clave

- **while**: ejecuta el bloque mientras la condición sea verdadera; útil cuando no sabes cuántas iteraciones habrá. Debes **garantizar la salida**: inicializa el contador, cámbialo en cada iteración (p. ej. `contador++`) y define una condición clara (p. ej. `contador < n`).
- **do...while**: ejecuta el bloque **al menos una vez** y luego evalúa la condición. Ideal cuando necesitas una primera ejecución asegurada.
- **Evitar bucles infinitos**: si la variable que evalúas no cambia dentro del ciclo, el bucle no termina. Usa un contador (o similar) y actualízalo en cada vuelta.

## Ejecutar los tests

Asegúrate de tener las dependencias instaladas:

```bash
npm install
```

Ejecuta los tests para verificar tu solución:

```bash
npx vitest src/12-while-do-while
```

O en modo watch para desarrollo:

```bash
npx vitest --watch src/12-while-do-while
```

Todos los tests deben pasar en verde para completar el reto.
