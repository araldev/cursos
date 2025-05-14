class Entidad {
    constructor(id) {
        this.id = id;
        this.created_at = new Date();
   }

   save() {
    console.log('save en Entidad');
   }
}

class User extends Entidad {         
    constructor(name) {              
        super(1);                  
        this.name = name;        
    }

    save() {                             // Method override. Para interceptar el metodo padre y usar uno propio de la clase, volver a declarar el metodo en la clase actual.
        super.save();                    // Para ejecutar la logica del metodo padre llamarla con super.ej();
        console.log('save en Usuario');   
    }
}

const u = new User('Chanchito feliz');