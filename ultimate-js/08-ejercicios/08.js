const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 13, nombre: 'Chanchito', plan: 'free' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
    { edad: 25, nombre: 'Felipe', plan: 'gold' },
];

//Obtener los usuarios pago
//Ordenar de mayor a menor edad
//Devolver el nombre del usuario
//Crear una plantilla HTML
//Imprimirla en consola
/**
 * <ul>
 * <li>Felipe</li>
 * <li>Nico</li>
 * </ul>
 */

// const uPago = usuarios.filter((usuarios) => usuarios.plan !== 'free');
// console.log(uPago);
usuarios.sort((a, b) => {
    if (a.edad < b.edad) {return 1};
    if (a.edad > b.edad) {return -1 };
    return 0;
})
// console.log(usuarios);

const lista = usuarios 
    .filter((usuarios) => usuarios.plan !== 'free')
    .map(usuario => `<li>${usuario.nombre}</li>`);
    
const html = `
<ul>
    ${lista.join(`
    `)}
</ul>
`

console.log(html);