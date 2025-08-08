// .js --> por defecto utiliza CommonJS (Desde Node 20 LTS NO!!!)
// .mjs --> para utilizar ES Modules
// .cjs --> para utilizar CommonJS

// Desde Node 20 LTS ya no hace
//  falta ninguna configuración extra para usar ES Modules
//  en archivos .js siempre que tu package.json no contenga
//  explícitamente "type": "commonjs"

import { sum } from './sum.mjs'

console.log(sum(1, 2))
