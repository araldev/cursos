function getProto(u) {
    return Object.getPrototypeOf(u);
}

function Entidad() {}

Entidad.prototype.save = function () {
    console.log('guardando desde entidad...');
}

function User() {}

// Method override. Reemplazar el método(interceptarlo).
User.prototype.save = function () {
    console.log('guardando desde User...');
}

Object.setPrototypeOf(User.prototype, Entidad.prototype);

const u = new User();
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(u)).save());
console.log(getProto(getProto(u)).save());
