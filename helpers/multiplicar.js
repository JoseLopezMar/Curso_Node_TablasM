const fs = require('fs');
const colors = require('colors');
const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    try {
        let salida, consola = '';
        for (let i = 1; i <= hasta; i++) {
            consola += `${base} ${'X'.red} ${i} ${'='.red} ${base * i}\n`;
            salida += `${base} X ${i} = ${base * i}\n`;
        }
        if (listar) {
            console.log('========================================='.magenta);
            console.log(colors.cyan(`               TABLA DEL ${base}`));
            console.log('========================================='.magenta);
            console.log(consola);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return(`tabla-${base}.txt`)
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}