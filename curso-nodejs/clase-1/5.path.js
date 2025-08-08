const path = require('node:path')

// ❌ Nunca hacer rutas en node así ---> './content/subfolder/test.txt'
// Depende del sistema operativo las barras son distintas
// --> unix /
// --> windows \
console.log(path.sep) // --> barra separadora de carpetas según sistema operativo

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log("path.join('content', 'subfolder', 'test.txt') :", filePath)

const base = path.basename('/tmp/midu-secret-files/password.txt')
console.log("path.basename('/tmp/midu-secret-files/password.txt') :", base)

const filename = path.basename('/tmp/midu-secret-files/password.txt', '.txt') // <-- Segundo parámetro elimina la extensión
console.log("path.basename('/tmp/midu-secret-files/password.txt', '.txt') :", filename)

const extension = path.extname('my.super.image.jpg')
console.log("path.extname('my.super.image.jpg') :", extension)
