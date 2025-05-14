const miArray = [
    "hola",
    12,
    "Mundo",
    {},
    { id: 15 },
    ['lala'], //tipo object
]

//numeros, strings, objetos.
function divididePorTipo(arr) {
    return {
        numeros: arr.filter(n => typeof n === "number"),
        strings: arr.filter(n => typeof n === "string"),
        Objects: arr.filter(n => typeof n === "object"),
    }
}


const nuevoArray = divididePorTipo(miArray);
console.log(nuevoArray);