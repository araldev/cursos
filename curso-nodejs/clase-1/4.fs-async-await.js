// En .cjs no funciona el async-await a no ser que
// uses una función asíncrona autoinvocada IIFE (async funciton() {})()

// Los ES Modules si que tienen soporte de usar await en el cuerpo del archivo.
// "Top level await"
const fs = require('node:fs/promises')

console.log('leyendo el primer archivo...')
const text = await fs.readFile('./archivo.txt', 'utf-8')
console.log('primer texto:', text)

console.log('Hacer cosas mientras lee el archivo...')

console.log('leyendo el segundo archivo...')

const secondText = await fs.readFile('./archivo2.txt', 'utf-8')
console.log('segundo texto:', secondText)

// -------------------------------------------------------------------
// para archivos con extensión .cjs
;(async function () {
  console.log('leyendo el primer archivo...')
  const text = await fs.readFile('./archivo.txt', 'utf-8')
  console.log('primer texto:', text)

  console.log('Hacer cosas mientras lee el archivo...')

  console.log('leyendo el segundo archivo...')

  const secondText = await fs.readFile('./archivo2.txt', 'utf-8')
  console.log('segundo texto:', secondText)
})()
