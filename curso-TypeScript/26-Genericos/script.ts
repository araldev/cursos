// En TypeScript, los genéricos son una característica que permite definir funciones, clases o interfaces que pueden trabajar con diferentes tipos de datos sin tener que especificar cada tipo explícitamente. Esto permite crear código reutilizable y adaptable a diferentes situaciones.

function getArray(items : any[]) : any[] {
    return new Array().concat(items);
}
// En este caso, la función getArray toma un array de elementos de cualquier tipo (any[]) y devuelve un nuevo array que contiene esos mismos elementos. La función utiliza el método concat() para combinar los elementos en un nuevo array.
// El uso de any como tipo de dato permite que la función acepte cualquier tipo de elemento, pero esto puede ser menos seguro en términos de tipos. En su lugar, se pueden utilizar genéricos para hacer la función más flexible y segura.
function getArrayGeneric<T>(items : T[]) : T[] {
    return new Array<T>().concat(items);
}
// En este caso, T es un parámetro de tipo genérico que se puede reemplazar por cualquier tipo específico cuando se llama a la función. Esto permite que la función sea más flexible y segura en términos de tipos, ya que el compilador puede verificar que los tipos son compatibles.
// Por ejemplo, si se llama a la función con un array de números, T se reemplazará por el tipo number, y si se llama con un array de cadenas, T se reemplazará por el tipo string.
const numberArray = getArrayGeneric<number>([1, 2, 3, 4]);
const stringArray = getArrayGeneric<string>(["Hello", "World"]);
console.log(numberArray);
console.log(stringArray);
// En este caso, numberArray contendrá un array de números y stringArray contendrá un array de cadenas. La función getArrayGeneric es más flexible y segura que la versión original getArray, ya que permite al compilador verificar los tipos de datos en tiempo de compilación.

const multipleArray = getArrayGeneric<any>([1, "Hello", true, { name: "John" }]);
console.log(multipleArray);