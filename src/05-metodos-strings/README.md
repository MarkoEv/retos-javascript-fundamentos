# Reto 05 - Métodos esenciales de strings en JavaScript

## Descripción

En este reto practicarás los métodos más útiles para trabajar con texto en JavaScript: **length**, **slice**, **split**, **trim**, **toLowerCase**, **includes**, **startsWith**, **endsWith** y **replace**. Aprenderás a contar caracteres, extraer porciones, dividir y limpiar texto, normalizar mayúsculas/minúsculas, buscar y validar prefijos/sufijos, y reemplazar sin mutar el original (strings inmutables).

## Instrucciones

Abre el archivo `challenge.js` y completa cada función según las indicaciones en los comentarios.

### Retos a completar

| #   | Función                                       | Qué practicas                    |
| --- | --------------------------------------------- | -------------------------------- |
| 1   | `contarCaracteres(texto)`                     | Propiedad length                 |
| 2   | `extraerConSlice(texto, inicio, fin)`         | slice con índices (fin opcional) |
| 3   | `extraerDesdeFinal(texto, n)`                 | slice con índice negativo        |
| 4   | `dividirEnPartes(texto, separador)`           | split                            |
| 5   | `limpiarEspacios(texto)`                      | trim                             |
| 6   | `normalizarMinusculas(texto)`                 | toLowerCase                      |
| 7   | `incluyeSubcadena(texto, subcadena)`          | includes                         |
| 8   | `empiezaCon(texto, prefijo)`                  | startsWith                       |
| 9   | `terminaCon(texto, sufijo)`                   | endsWith                         |
| 10  | `reemplazarPrimera(texto, buscar, reemplazo)` | replace e inmutabilidad          |

## Conceptos clave

- **length**: cuenta caracteres; útil para validar si un string está vacío o cumple un tamaño mínimo.
- **slice** y **substring**: extraen porciones; solo slice acepta índices negativos (contar desde el final).
- **split**: divide el string por un separador y devuelve un array.
- **trim**: elimina espacios al inicio y al final; trimStart y trimEnd para solo un lado.
- **toLowerCase / toUpperCase**: normalizan para comparaciones confiables.
- **includes**: búsqueda rápida que retorna true/false.
- **startsWith / endsWith**: validación de prefijo y sufijo (p. ej. extensión de archivo).
- **replace**: reemplaza sin modificar el original; los strings son primitivos inmutables.

## Ejecutar los tests

Asegúrate de tener las dependencias instaladas:

```bash
npm install
```

Ejecuta los tests para verificar tu solución:

```bash
npx vitest src/05-metodos-strings
```

O en modo watch para desarrollo:

```bash
npx vitest --watch src/05-metodos-strings
```

Todos los tests deben pasar en verde para completar el reto.
