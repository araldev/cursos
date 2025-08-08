// process proporciona información y control sobre el proceso actual de ejecución
// argumentos de entrada
console.log(process.argv) // <-- argumentos que va a recibir en la línea de comandos

// controlar el proceso y su salida
process.exit(0) // <-- 0 todo ha ido bien y el proceso tiene que terminar ahí
process.exit(1) // <-- 1 ha habido un error y queremos que salga

// podemos controlar eventos del proceso
process.on('exit', () => {
  // limpiar los recursos
})

// current working directory
console.log(process.cwd()) // <-- te dice desde donde se está ejecutando el proceso,
// no necesariamente tiene que ser la carpeta actual,
// sino desde donde se ejecuta

// platform
console.log(process.env.PEPITO)
