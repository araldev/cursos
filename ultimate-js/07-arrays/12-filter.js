let usuarios = [
    { edad: 17, nombre: 'Nico'},
    { edad: 13, nombre: 'Chanchito'},
    { edad: 25, nombre: 'Felipe'},
    { edad: 32, nombre: 'Fernanda'},
];

const mayores = usuarios.filter((usuarios) => usuarios.edad > 17);
const menores = usuarios.filter((usuarios) => usuarios.edad < 18);
console.log(mayores);
console.log(menores);