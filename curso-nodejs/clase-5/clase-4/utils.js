// Creamos una utilidad para no crear el require en cada archivo
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
export const readJSON = (path) => require(path)
