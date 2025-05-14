class Restaurants {
    static cantidad = 12;
    constructor(name) {
        this.name = name;
    }

    getTimetable(){  // obtener horario          
        console.log('horario restaurante')
    }

    static getRestaurant(id) {              // Con static hacemos referencia a que este metodo va a pertenecer 
        return new Restaurants('BBQ');      // a la clase, pero no a la instancia del objeto.
    }
    }

const r = Restaurants.getRestaurant(12);

// const arr = new Array();
// Array.isArray();
// Array.from();
// Object.assign();