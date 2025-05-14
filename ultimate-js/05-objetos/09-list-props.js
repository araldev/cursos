const punto = {
    x: 10,
    y: 15,
    dibujar() {
        console.log('dibujando');
    }
};
//delete punto.dibujar;
if ('dibujar' in punto) {
    punto.dibujar();
}
// let keys = Object.keys(punto);
//console.log(Object.keys(punto));
for (let llave of Object.keys(punto)) {
    console.log(llave, punto[llave]);
}

for (let entry of Object.entries(punto)) {
    console.log(entry);
}

for (let llave in punto) {
    console.log(llave, punto[llave]);
}

/**
 * Los dos primeros for se utilizan para listar las propiedasdes de un objeto, es el forma antigua de hacerlo.
 * El ultimo for es la forma nueva de hacerlo. 
 */