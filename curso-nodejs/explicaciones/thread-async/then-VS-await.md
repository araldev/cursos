# Diferencias entre promesas encadenadas con `then` y `async await`.

- Desde el punto de vista del **event-loop** y del **thread** sí **ninguno bloquea** y ambos liberan el call-stack mientras la promesa está pendiente.
- La diferencia es cuándo se ejecuta el código que sigue:

| `.then`                                                                                                        | `await`                                                                                                            |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| El _callback_ que le pasas a `.then` **se encola para ejecutarse después** de que la promesa se resuelva.      | El código que hay **tras** el `await` se “pausa” y se reanuda **en el mismo punto** cuando la promesa se resuelve. |
| Devuelve **otra promesa**, por lo que encadenas con más `.then`.                                               | Devuelve el **valor desempaquetado**, por lo que el código “sigue” como si fuera síncrono.                         |
| Ejemplo:                                                                                                       | Ejemplo:                                                                                                           |
| `js readFile('a.txt') .then(data => { /* se ejecuta después */ }); console.log('antes'); // se ejecuta ahora ` | `js const data = await readFile('a.txt'); console.log('después'); // se ejecuta después `                          |

En resumen: `.then` y `await` hacen la misma espera no-bloqueante, pero await es azúcar sintáctico que te permite escribir el flujo como si fuera secuencial, mientras que `.then` te obliga a encadenar funciones.

## Async await

- `await` sólo puede usarse dentro de una función declarada como `async`.
- Si lo escribes “sueltamente” en el cuerpo de un archivo:

```js
// ❌ ESTO FALLA: SyntaxError
const data = await readFile("a.txt");
console.log(data);
```

Node lanzará:
`SyntaxError: await is only valid in async functions and the top level bodies of modules`

### Soluciones

1. **Módulos ES** (`.mjs` o `"type":"module"` en `package.json`)

Desde **Node 14+** puedes usar **top-level await** sin envolverlo:

```js
// index.mjs  o  index.js con "type":"module"
import { readFile } from "fs/promises";
const data = await readFile("a.txt", "utf8");
console.log(data);
```

2. CommonJS (`.cjs` sin `"type":"module"`)
   Debes meter await dentro de una función autoinvocada async IIFE:

```js
const { readFile } = require("fs/promises");

(async () => {
  const data = await readFile("a.txt", "utf8");
  console.log(data);
})();
```
