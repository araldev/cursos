// function User(name) {
//     this.name = name;
//     this.instancia = function () {}
// }

// User.prototype.login = function () {
//     console.log('Hola mundo!');
// }

// Las clases en JS son azúcar sintáctica; es una forma de escribir algo, 
// pero que por debajo tiene un resultado completamente distinto.
// Las clases no actuan como las funciones estas no se cargan al principio de la página,
// por lo que nos dara error si intentamos crear un objeto antes de la clase.
class User {
    constructor(name) {                     // Si creamos una propiedad dentro del constructor y a esta propiedad   
        this.name = name,                   // le asignamos una funcion sera parte del objeto mismo y no del prototipo.  
        this.instancia = function () {}
    }

    activo = true;

    logout = () => {                        // Si creas un metodo(funcion) a traves de una propiedad
        console.log('logout');              // se le añadira la propiedad al objeto no al prototipo.
    }

    login() {                               // Con esta sintaxis los metodos se van
        console,log('Hola Mundo');          // a agregar al prototipo de nuestro usuario.
    }                                       
}

const u = new User('Canchito Feliz');       // Con las clases hay que usar la palabra new obligatoriamente
                                            // al crear un nuevo objeto o nos devolverá error.