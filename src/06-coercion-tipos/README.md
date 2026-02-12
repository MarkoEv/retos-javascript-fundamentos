# Reto 06 - Coerción de tipos en JavaScript explicada

## Descripción

En este reto practicarás la **coerción de tipos** en JavaScript: cuándo ocurre la coerción implícita (operadores `+`, `-` con string y número, booleanos en operaciones numéricas) y cómo aplicar **conversión explícita** con `Number`, `parseInt`, `parseFloat`, `String` y `Boolean` para que tus operaciones sean seguras, sobre todo con datos de formularios.

## Instrucciones

Abre el archivo `challenge.js` y completa cada función según las indicaciones en los comentarios.

### Retos a completar

| # | Función | Qué practicas |
|---|---------|---------------|
| 1 | `resultadoConcatenacionMas(str, num)` | Coerción implícita: `+` concatena string y número |
| 2 | `resultadoRestaConString(str, num)` | Coerción implícita: `-` convierte string a número |
| 3 | `booleanoMasUno(bool)` | Booleano en operación numérica (true → 2, false → 1) |
| 4 | `convertirStringANumero(str)` | Conversión explícita con `Number()` |
| 5 | `parsearEnteroYDecimal(strEntero, strDecimal)` | `parseInt(..., 10)` y `parseFloat()` |
| 6 | `convertirNumeroAString(num)` | Conversión explícita con `String()` |
| 7 | `convertirABooleano(val)` | Conversión explícita con `Boolean()` |

## Conceptos clave

- **Coerción implícita**: JavaScript convierte un tipo a otro según el contexto. Con `+` y un string presente, hay concatenación; con `-` el string se convierte a número.
- **Conversión explícita**: Usa `Number()`, `parseInt(valor, 10)`, `parseFloat()`, `String()` y `Boolean()` para tener control total y evitar sorpresas con datos de usuario.
- **Buenas prácticas**: Verifica tipos con `typeof`, convierte entradas de formularios a número si vas a sumar o restar, y prefiere conversión explícita antes de operar.

## Ejecutar los tests

Asegúrate de tener las dependencias instaladas:

```bash
npm install
```

Ejecuta los tests para verificar tu solución:

```bash
npx vitest src/06-coercion-tipos
```

O en modo watch para desarrollo:

```bash
npx vitest --watch src/06-coercion-tipos
```

Todos los tests deben pasar en verde para completar el reto.
