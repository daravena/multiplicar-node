const fs = require('fs');
const colors  = require('colors')


let data = '';
console.log('=============================================='.red);
console.log('==============TABLA DE MULTIPLICAR============'.green);
console.log('=============================================='.red);
let listarTabla = (base, limite) => {
  for (let i = 0; i <= limite; i++) {
    console.log(base + ' x ' + i + '=' + base * i)
  }

}


let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {

    if (!Number(base))
      reject('No es un numero el valor introducido')

    for (let i = 1; i <= limite; i++) {
      data += base + ' * ' + i + ' = ' + base * i + '\n';
    }


    fs.writeFile('tablas/tabla-' + base + '.txt', data, (err) => {
      if (err) reject(err);
      resolve('The file has been saved: tabla-' + base + '.txt');
    });

  });

}
module.exports = { crearArchivo, listarTabla }
