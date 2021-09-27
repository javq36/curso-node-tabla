const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs.js');
const colors = require('colors')


crearArchivo(argv.b, argv.listar, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err))

