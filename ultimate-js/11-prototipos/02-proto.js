function User() {
    this.name = 'hola Mundo';
    // método de instancia
    this.logger = function() {
        console.log('loggeando...');
        // this.login();
        }
}

const user1 = new User();
const user2 = new User();

// método de prototipo
User.prototype.login = function () {
    console.log('iniciando sesión', this.name);
    this.logger();
};

User.prototype.toString = function() {
    console.log('Usuario:', this.name);
}
console.log(user1);