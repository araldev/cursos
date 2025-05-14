let accion = 'actualizar';

// Despues de case al acabar la accion que queremos hay que poner break porque sino todas las demas acciones de abajo van a ejecutarse independientemente de que la variable sea la misma que lo configurado.
//Default se ejecutara siempre que no exista ningun case al que la variable pueda corresponder.
switch (accion) {
    case 'listar':
        console.log('Acción de listar');
        break;
    case 'guardar':
        console.log('Acción de guardar');
        break;
    default:
        console.log('Acción no reconocida');
}