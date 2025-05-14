function mixin(Ctr, ...args) { // Ctr hace referencia a la funcion constructora.
    Object.assign(Ctr.prototype, ...args);
}

let vuela = {
    vuela() {
        console.log('volando');
    }
};

let nada =  {
    nada() {
        console.log('nadando');
    }
}
let bano =  {
    bano() {
        console.log('yendo al baño');
    }
}
let camina =  {
    camina() {
        console.log('caminando');
    }
}

// vuela, nada, camina, va al baño
function Pato () {
    this.name = 'Patito';
}
mixin(Pato, vuela, nada, camina, bano);

let pato = new Pato();

// camina, nada, va al baño
function Perro () {}
Object.assign(Perro.prototype, nada, bano, camina)

let perro = new Perro();

// nada, va al baño
function Pez () {}
Object.assign(Pez.prototype, nada, bano);

let p = new Pez();

// vuela pero no nada, camina ni va al baño
function Avion () {}
Object.assign(Avion.prototype, vuela);
console.log(Avion.prototype, new Avion());