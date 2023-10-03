const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 1, listar, hasta) => {
        
    try {
        
        let salida = '';
        let consola = '';
        
        for (let i = 1; i <= hasta; i++) {
            let resultado = i * base;
            salida += `${i} x ${base} = ${resultado}\n`
            consola += `${i} ${'x'.green} ${base} ${'='.green} ${resultado}\n`
        }
        
        if (listar) {
            console.log('=================='.cyan);
            console.log(`   Tabla del: ${base}`.green);
            console.log('=================='.cyan);
    
            console.log(consola);   
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        return`tabla-${base}.txt`.green;

    } catch (error) {
        throw error;
    }
};

module.exports = {
    crearArchivo
}