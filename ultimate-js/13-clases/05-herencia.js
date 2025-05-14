class Entidad {
    constructor(id) {
        this.id = id;
        this.created_at = new Date();
   }

   save() {}
}

class User extends Entidad {         // Para poder reutilizar el codigo de una clase padre, usamos
    constructor(name) {              // la palabra reservada de extends más el nombre de la clase de la cual 
        super(1);                    // queremos copiar(extender). ej: class User extends Entidad {}
        this.name = name;            // Cada vez que usemos extends tenemos que llamar dentro del constructor
    }                                // al constructor padre con la palabra super() y los argumentos que necesite.
}

const u = new User('Chanchito feliz');