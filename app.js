const {crearArchivoTabla} = require('./helpers/tabla-mult');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

//console.log(process.argv);
//const [ , ,arg] = process.argv;
//const [ ,num=0] = arg.split('=');

crearArchivoTabla(argv.num,argv.listar,argv.hasta)
    .then(nombreArchivo => console.log(colors.trap(nombreArchivo), 'creado'.green))
    .catch(err => console.log(colors.red(err)));