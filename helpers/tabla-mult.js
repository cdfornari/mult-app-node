const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = (num = 0,listar = false,hasta = 10) =>{

    return new Promise((resolve,reject)=>{
        let salidaArchivo = '';
        let salidaConsola = '';
        for (let i = 1; i <= hasta; i++) {
            salidaArchivo += `${num} x ${i} = ${num*i}\n`; // \n: salto de línea
            salidaConsola += `${num} ${'x'.brightGreen} ${i} ${'='.brightGreen} ${num*i}\n`; // \n: salto de línea
        }
        if(listar){
            console.log('=============='.random);
            console.log('Tabla del: '.america, colors.brightGreen(num));
            console.log('=============='.random);
            console.log('');
            console.log(salidaConsola);
        }

        fs.writeFile(`./salida/tabla-${num}.txt`,salidaArchivo, err =>{
            reject(err);
        });
        resolve(`tabla-${num}.txt`);
    })
}

module.exports = {
    crearArchivoTabla
}