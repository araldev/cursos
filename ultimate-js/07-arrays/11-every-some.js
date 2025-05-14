let usuarios = [
    { id: 1, activo: true },
    { id: 2, activo: false },
    { id: 3, activo: false },
];

//cuando pasa por un valor false se para la funcion y todo lo que este despues no lo evalua.
let todosActivos = usuarios.every(u => {
    console.log('todos activos', u.id);
    return u.activo;
})

console.log(todosActivos);


//se va a ejecutar hasta que devuelva un valor de true y todo lo que esta despues no lo evalua.
let algunoActivo = usuarios.some(u => {
    console.log(u.id);
    return u.activo;
})

console.log(algunoActivo);
