function User() {
    this.name = 'Hola Mundo';
}

User.prototype.login = function () {
    console.log('Iniciando sesión', this.name);
}

let user = new User();

for (let prop in user)
    if (!user.hasOwnProperty(prop))
    console.log(prop);

console.log(Object.keys(user));
console.log(user);