// En TypeScript, un enum (enumeración) es una forma de definir un conjunto de constantes con nombre, que se pueden usar en el código para representar valores fijos o estados. Permite asociar nombres descriptivos a valores, haciendo que el código sea más legible y fácil de mantener. 

// En JS podriamos hacer algo así
// const ERROR_TYPES = {
//     NOT_FOUND: 'NOT_FOUND',
//     INVALID_INPUT: 'INVALID_INPUT',
//     UNAUTHORIZED: 'UNAUTHORIZED',
//     FORBIDDEN: 'FORBIDDEN',
//     SERVER_ERROR: 'SERVER_ERROR',
// }

// function showMessage(type: string) {
//     switch (type) {
//         case ERROR_TYPES.NOT_FOUND:
//             console.log('Error: Not Found');
//             break;
//         case ERROR_TYPES.INVALID_INPUT:
//             console.log('Error: Invalid Input');
//             break;
//         case ERROR_TYPES.UNAUTHORIZED:
//             console.log('Error: Unauthorized');
//             break;
//         case ERROR_TYPES.FORBIDDEN:
//             console.log('Error: Forbidden');
//             break;
//         case ERROR_TYPES.SERVER_ERROR:
//             console.log('Error: Server Error');
//             break;
//         default:
//             console.log('Unknown Error');
//     }
// }

// En TS lo recomendable es usar enums (Siempre y cuando no se necesite un objeto con propiedades dinámicas, y sean finitos)
// enum ERROR_TYPES {
//     NOT_FOUND = 'NOT_FOUND',
//     INVALID_INPUT = 'INVALID_INPUT',
//     UNAUTHORIZED = 'UNAUTHORIZED',
//     FORBIDDEN = 'FORBIDDEN',
//     SERVER_ERROR = 'SERVER_ERROR',
// }

// Colocandolo como constante nos ahorramos código de JS, siempre que se pueda usar const es lo recomendable, ahora si vamos a consumir una biblioteca, o una serie de componentes externos a nuestra aplicación se recomienda no usar el const
const enum ERROR_TYPES {
    NOT_FOUND = 'NOT_FOUND',
    INVALID_INPUT = 'INVALID_INPUT',
    UNAUTHORIZED = 'UNAUTHORIZED',
    FORBIDDEN = 'FORBIDDEN',
    SERVER_ERROR = 'SERVER_ERROR',
}

function showMessageEnum(type: ERROR_TYPES) {
    switch (type) {
        case ERROR_TYPES.NOT_FOUND:
            console.log('Error: Not Found');
            break;
        case ERROR_TYPES.INVALID_INPUT:
            console.log('Error: Invalid Input');
            break;
        case ERROR_TYPES.UNAUTHORIZED:
            console.log('Error: Unauthorized');
            break;
        case ERROR_TYPES.FORBIDDEN:
            console.log('Error: Forbidden');
            break;
        case ERROR_TYPES.SERVER_ERROR:
            console.log('Error: Server Error');
            break;
        default:
            console.log('Unknown Error');
    }
}