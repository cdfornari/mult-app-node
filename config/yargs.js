const argv = require('yargs')
                .option('n',{
                    alias: 'num',
                    type: 'number',
                    demandOption: true,
                    describe: 'Número con que se hará la tabla de multiplicar'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Mostrar la tabla en consola'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Número hasta que se multiplicará'
                })
                .check((argv,options)=>{
                    if(isNaN(argv.num)){
                        throw ('num tiene que ser un número')
                    }
                    return true;
                })
                .argv;

module.exports = argv;