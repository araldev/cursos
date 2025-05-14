const usuario = {
    nombre: 'Nicolas',
    ciudadanias: ['Chile', 'Colombia', 'New Zealand'],
    mostrarCiudadanias() {
        this.ciudadanias.forEach(ciudadania => {
            console.log(this.nombre, ciudadania);
        })
    }
};

usuario.mostrarCiudadanias();