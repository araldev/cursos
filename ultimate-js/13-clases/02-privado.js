// function User(a) {
//     let name = a;
//     this.getName = function() { return name; }
// }

class User {
    #name;                          // Primero hay que declarar que propiedades son privadas con #
    
    constructor(name) {
        this.#name = name;
    }

    #logger() {                     // Si queremos crear metodos privados tenemos que usar # también.

    }

    getName() {                     // Tenemos que crear un metodo que nos devuelva el valor de la 
        this.#logger();             // propiedad privada.
        return this.#name;          
    }
}

const u = new User('Chanchito feliz');