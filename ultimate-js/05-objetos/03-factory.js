function crearUsuario(name, email) {
    return {
        email: email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('Recuperando Clave...');
        },
    };
}

let user1 = crearUsuario('Nicolas', 'nico@holamundo.io');
let user2 = crearUsuario('Felipe', 'felipe@holamundo.io');

console.log(user1, user2);