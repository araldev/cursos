//tienes que usar reduce
function divididePorTipo(arr) {
    return arr.reduce((acc, el) => {
        let llave = typeof el;

        acc[llave] = acc[llave] ? acc[llave] : [];
        acc[llave].push(el);
        return acc;
    }, {});
}


const miArray = [
    "Hola",
    12,
    true,
    "Mundo",
    {},
    { id: 15 },
    ['lala'],
]
let arr = divididePorTipo(miArray);
console.log(arr);

