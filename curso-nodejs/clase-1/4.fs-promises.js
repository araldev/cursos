const fs = require('node:fs/promises')

console.log('leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8')
  .then(text => {
    console.log('primer texto:', text)
  })

console.log('Hacer cosas mientras lee el archivo...')

console.log('leyendo el segundo archivo...')

fs.readFile('./archivo2.txt', 'utf-8')
  .then(text => {
    console.log('segundo texto:', text)
  })

// Esto sólo en los módulos nativos
// que no tienen promesas nativas.
// versión de readFile en promesa:
const { promisify } = require('node:util')
const readFilePromise = promisify(fs.readFile)

console.log('leyendo el primer archivo...')
readFilePromise('./archivo.txt', 'utf-8')
  .then(text => {
    console.log('primer texto:', text)
  })

console.log('Hacer cosas mientras lee el archivo...')

console.log('leyendo el segundo archivo...')

readFilePromise('./archivo2.txt', 'utf-8')
  .then(text => {
    console.log('segundo texto:', text)
  })
