//for in devuelve el indice.
let user = {
    id: 1,
    name: 'Chanchito Feliz',
    age: 25,
};

for (let propiedad in user) {
    console.log(propiedad, user[propiedad]);
}

let animales = ['Chanchito feliz', 'Dragón', 'Canguro'];
for (let indice in animales) {
    console.log(indice, animales[indice]);

}