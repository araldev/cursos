const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 13, nombre: 'Chanchito', plan: 'free' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
    { edad: 25, nombre: 'Felipe', plan: 'gold' },
];


const usuarioMayor = usuarios.reduce((acc, el) => 
    el.edad > acc.edad ? el : acc, 
usuarios[0])

console.log(usuarioMayor);

// function obtenerMayor(arr) {
//     let mayor = arr[0];
//     for (let usuario of arr) {
//         if (mayor.edad < usuario.edad) {
//             mayor = usuario;
//         }
//     }
//     return mayor;
// }


// const mayor = obtenerMayor(usuarios);

// console.log(mayor);