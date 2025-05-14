let numeros = [15, 10, -3];

numeros.sort(); //para ordenar el array de menor a mayor y si son letras usa los valores ascii.
numeros.reverse(); //le da la vuelta al array.

console.log(numeros);

// let letras = ['z', 'a', 'd'];

// letras.sort();

// console.log(letras);



let conMayusculuas = ['Z', 'a', 'd'];

conMayusculuas.sort((a, b) => {
    /**
     * a antes b => -1
     * b antes a => 1
     * si son iguales => 0
     */
    let alower = a.toLowerCase();
    let blower = b.toLowerCase();
    if (alower < blower) {
        return -1;
    }
    if (alower > blower) {
        return 1;
    }
    return 0;
});

console.log(conMayusculuas);  //ascii table, es la forma en la que se le da valor a las letras y caracteres.


let usuarios = [
    {edad: 15, nombre: 'Felipe'},
    {edad: 25, nombre: 'Nicolas'},
    {edad: 13, nombre: 'Poli'},
];

usuarios.sort((a, b) => {
    if (a.edad < b.edad) return -1;
    if (a.edad > b.edad) return 1;
    return 0;
})

console.log(usuarios);