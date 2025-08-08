const fs = require('node:fs')

const fileExist = fs.existsSync('content') // <--- si te da error no existe el archivo
console.log(fileExist)

fs.readdir('.', (err, files) => { // <-- en los Callbacks el err siempre va primero
  if (err) {
    console.error('Error al leer el directorio: ', err)
    return
  }

  files.forEach(file => {
    console.log(file)
  })
})
