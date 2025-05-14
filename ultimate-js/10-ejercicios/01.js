const obj = {
    nombre: 'Nicolas',
};

function Extender() {
    this.login = () => {
        console.log('iniciando sesión', this.nombre);
    }
    this.logout = () => {
        console.log('cerrando sesión Nicolas', this.nombre);
    }
}
    
Extender.call(obj);

console.log(obj);
obj.login();
obj.logout();