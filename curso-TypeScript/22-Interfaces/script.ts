// En TypeScript, una interfaz define la estructura de un objeto, especificando qué propiedades y métodos debe tener. Es como un contrato que define cómo se espera que un objeto sea. Sirve para verificar que un objeto cumpla con la estructura definida por la interfaz. 

// Anteriormente habiamos visto esto

// type Heroe = {
//     id: string,
//     name: string,
//     age: number
// }

// const hero: Heroe = {
//     id: '1',
//     name: 'Spiderman',
//     age: 30
// }

// Pero en lugar de esto podemos uar interfaces, que tiene ligeras diferencias con type

// Esto es lo mismo que POO, el concepto es moldear comportamientos sin definirlos, y en los types si se definen

// Esto es POO en esencia
interface Heroe {
    id: string,
    name: string,
    age: number,
    powers: string[],
    usePower: (power: string) => void
}

const hero: Heroe = {
    id: '1',
    name: 'Spiderman',
    age: 30,
    powers: ['web-slinging', 'super strength'],
    usePower(power: string) {
        console.log(`${this.name} is using ${power}`);
    }
}

// Las interfaces pueden estar anidadas
interface Producto {
    id: number,
    name: string,
    price: number,
}

interface CarritoDeCompras {
    totalPrice: number,
    productos: (Producto | Zapatilla)[], // Puede ser cualquiera de los dos, este operador también es valido aquí
}

// Hay dos formas de indicar las funciones en las interfaces, la primera es

// interface CarritoOps {
//     add: (producto: Producto) => void,
//     remove: (id: number) => void,
//     clear: () => void,
// }

// Otra forma es esta
interface CarritoOps {
    add(producto: Producto): void,
    remove(id: number): void,
    clear(): void,
}

// La primera es más entendible

const carrito: CarritoDeCompras = {
    totalPrice: 100,
    productos: [
        { id: 1, name: 'Laptop', price: 1000 },
        { id: 2, name: 'Mouse', price: 50 },
    ],
}

// Se pueden tener dos interfaces con el mismo nombre, y se unirán en una sola (pero no mismos atributos ni métodos)

// Las interface también pueden extender, una interface es casi una clase abstracta, y un type es una clase concreta

interface Zapatilla extends Producto {
    talla: number,
    color: string,
}

// En general se usan más types que interfaces, cuando se trabaja con conceptos relacionados con POO, si que se usan más interfaces
// En general, las interfaces son más flexibles y se pueden extender, mientras que los tipos son más estrictos y se utilizan para definir tipos de datos más complejos. Las interfaces son más adecuadas para definir la estructura de objetos y clases, mientras que los tipos son más adecuados para definir tipos de datos primitivos y uniones.