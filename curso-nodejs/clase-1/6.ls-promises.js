const fs = require('node:fs/promises')

fs.stat('content') // <--- si te da error no existe el archivo

fs.readdir('.')
  .then(files => {
    files.forEach(file => {
      console.log(file)
    })
  }).catch(err => console.error('Error al leer el directorio: ', err))
