
const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Base de la tabla a crear'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra en consola la tabla creada'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Hasta que numero debe llegar la tabla'
                })
                .check((argv, options) => {
                    if (isNaN(argv.base)) {
                        throw 'La base tiene que ser un numero'.red
                    }
                    return true;
                })
                .check((argv, options) => {
                    if (isNaN(argv.hasta)) {
                        throw 'Hasta tiene que ser un numero'.red
                    }
                    return true;
                })
                .argv;

module.exports = argv;
