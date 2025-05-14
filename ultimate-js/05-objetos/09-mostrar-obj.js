const punto = {
    x: 10,
    y: 15,
    dibujar() {
        console.log('dibujando');
    }
};

// Object.keys() te da todas las propiedasdes del objeto.
console.log(Object.keys(punto)); // [x, y, dibujar]

// Object.values() te da todos los valores del objeto.
console.log(Object.values(punto)); // [10, 15, f ()]

// Object.entries() te da las propiedades y los valores del objeto. Te da un Array de pares(de arrays).
console.log(Object.entries(punto)); //  [
                    //      [x, 10]
                    //      [y, 15]
                    //      [dibujar, f ()]
                    //  ]