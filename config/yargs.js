const argv = require('yargs')
    .option('b', {
        alias: 'base',
        demandOption: true,
        type: 'number',
        describe: 'es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'muestra la tabla de multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Este es el numero maximo de la base hasta donde queremos imprimir'
    })
    .check( (argv, options) =>{
        if(isNaN(argv.b)){
            throw 'La base debe ser numerica'
        }
        return true
    } )
    .argv

    module.exports = argv;