//AND, OR, NOT

//AND && para que devuelva true tienen que ser los dos true

let mayor = false;
let suscrito = true;
console.log(true && true);
console.log(false && true);
console.log('operador and', mayor && suscrito);

//OR || para que devuelva true tiene que haber uno solo true
console.log('operador or', mayor || suscrito);

//NOT ! se puede usar si da false para solo acceder al catalogo infantil por ejemplo
console.log('operador not', !mayor);
let catalogoInfantil = !mayor;
console.log(catalogoInfantil);