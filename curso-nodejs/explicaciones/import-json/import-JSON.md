# Como importar archivos JSON en ESModules

## 1. Como leer un JSON en ESModules recomendado por ahora

```js
// recomendado por ahora
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const movies = require("./movies.json");
```

### Crear utilidad para usar en diferentes archivos sin tener que crearlo repetidamente:

```js
// Creamos una utilidad para no crear el require en cada archivo
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
export const readJSON = (path) => require(path);
```

### Importamos y usamos la utilidad

```js
// Importamos una utilidad para no crear el require en cada archivo
import { readJSON } from "./utils.js";
const movies = readJSON("./movies.json");
```

## 2. Como leer un JSON en ESModules; a partir de Node 22, pero error en standard

```js
// + Node22 & error en standard
import movies from './movies.json' with { type: 'json' }
```

## 3. Como leer un JSON en ESModules; es ás lento al tener que parsear el archivo

```js
// más lento al tener que parsear el archivo
import fs from "node:fs";
const movies = JSON.parse(fs.readFileSync("./movies.json", "utf-8"));
```
