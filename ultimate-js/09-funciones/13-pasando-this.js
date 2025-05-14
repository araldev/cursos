// (function saludar(...rest) {
//     console.log(this, rest);
// }).bind({ propiedad: 'Hola mundo' })(1, 2);


//Primero .call recibe el contexto de this y despues los argumentos que les quiera pasar.

// saludar.call({ propiedad: 'Hola mundo' }, 1, 5);  
// saludar.apply({ propiedad: 'Hola mundo' }, [1, 5]);
// saludar.bind({ propiedad: 'Hola mundo' })(3, 5);
// .bind es lo mismo el ejemplo de arriba que el de abajo. en el de arriba llamamos inmediatamente a la funcion después de renombrar this.
// let nuevoSaludar = saludar.bind({ propiedad: 'hola mundo'});
// nuevoSaludar(1, 5);


// const usuario = {
//     nombre: 'Nicolas',
//     ciudadanias: ['Chile', 'Colombia', 'New Zealand'],
//     mostrarCiudadanias() {
//         const x = this.ciudadanias.forEach(function (ciudadania) {
//             console.log(this.nombre, ciudadania);
//         }.bind(this));
//     }
// };

// usuario.mostrarCiudadanias();


// const usuario = {
//     nombre: 'Nicolas',
//     ciudadanias: ['Chile', 'Colombia', 'New Zealand'],
//     mostrarCiudadanias() {
//         let self = this;
//         const x = this.ciudadanias.forEach(function (ciudadania) {
//             console.log(self.nombre, ciudadania);
//         });
//     }
// };

// usuario.mostrarCiudadanias();


const usuario = {
    nombre: 'Nicolas',
    ciudadanias: ['Chile', 'Colombia', 'New Zealand'],
    mostrarCiudadanias() {
        this.ciudadanias.forEach(function (ciudadania) {
            console.log(this.nombre, ciudadania);
        }, this);
    }
};

usuario.mostrarCiudadanias();