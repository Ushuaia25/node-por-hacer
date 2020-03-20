const colors = require('colors');

const argv = require('./config/yargs').argv;

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {

    case 'crear':
        console.log('Creando la tarea:', argv.descripcion);
        let tarea = porHacer.crear(argv.descripcion);
        break;

    case 'listar':

        let listado = porHacer.getListado();

        console.log('===== POR HACER ====='.green);

        for (const tarea of listado) {
            console.log('Tarea:'.green, tarea.descripcion);
            console.log('Estado:'.green, tarea.completado);
        }

        console.log('====================='.green);

        break;

    case 'actualizar':

        let actualizado = porHacer.actualizar(argv.descripcion);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        break;

    default:
        console.log('Comando no reconocido');
}