function User() {
    this.name = 'Hola Mundo';
}

function Product () {
    this.name = 'Producto';
}

function Entidad() {}
Entidad.prototype.save = function () {
    console.log('guardando', this.name);
}    
Entidad.prototype.validate = function () {
    console.log('validando', this.name);
}    

// User.prototype = Entidad.prototype;
// User.prototype.constructor = User;
// User.prototype = Object.create(Entidad.prototype);
// User.prototype.constructor = User;
Object.setPrototypeOf(User.prototype, Entidad.prototype); //le asignamos el prototipo de entidad a user, manteniendo en el objeto de user.property la funcion constructora de user.
Object.setPrototypeOf(Product.prototype, Entidad.prototype);

const user = new User();
console.log(user);