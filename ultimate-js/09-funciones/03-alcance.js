let afuera = 'estoy afuera';

function alcance() {
    console.log(afuera);
    afuera = 'estoy dentro';
    function saludo() {}
    var vieja = 'ya no usar';
    let variable = 'Hola Mundo';
    const constante = 'Hola Mundo!';
}
// console.log(saludo);
// console.log(vieja);
// console.log(variable);
// console.log(constante);

console.log(afuera);
alcance();

console.log(afuera);