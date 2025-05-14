function sumaTodo(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('El parámetro no es un array');
    }
    return arr.reduce((acc, el) => {
        if (typeof el !== 'number' || Number.isNaN(el)) {
            throw new Error (`Elemento ${el} no es número`)
        }
        return acc + el
    });
}

// console.log(sumaTodo([1, 2, 3, 4]));
try {
    console.log(sumaTodo([1, 2, 3, 4]));
} catch (error) {
    console.log(error.message);
}

console.log('despues del try catch');