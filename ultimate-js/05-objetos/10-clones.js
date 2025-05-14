let punto = {
    x: 10,
    y: 15,
};

let referencia = Object.assign( punto, { z: 20, x: 1 });
let clonePunto = Object.assign( {}, punto, { z: 20, x: 1 });
//console.log(punto, clonePunto);
//console.log(referencia);

let copiaPunto = Object.assign({}, punto);
// console.log(copiaPunto, punto);

//Object.assign() sirve para poner una variable al empezar y todo lo que vaya a la derecha se le agregara
//si pones un objeto vacio al principio y a la derecha una variable con su valor, clonas el objeto. Para ello hay que crear una referecia con let para guardar el nuev objeto.
// siempre va a tomar la propiedad que tiene mas a la derecha si es que se repite la propiedad.


//Esta es la forma vieja de copiar objetos, no se recomienda usarla.
let copia4 = {};
for (let llave in punto) {
    copia4[llave] = punto[llave];
}
console.log(copia4);



//Esta manera es la nueva forma de copiar objetos.
let copia3 = { ...punto };
// console.log(copia3);