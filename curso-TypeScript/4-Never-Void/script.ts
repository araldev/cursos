// Never es para indicar que una función nunca va a retornar un valor
// En este caso, la función siempre va a lanzar un error
function throwError(message: string): never {
    throw new Error(message);
}

// Ojo la diferencia con void es que esta puede retornar un valor, o no, pero a void no le importa

function nada(): void {
    return;
}

function nada2(): never {
    // Termina apenas encuentra el throw
    throwError('nada');
}

// Never no retorna nada