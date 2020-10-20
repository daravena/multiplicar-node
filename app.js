const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors  = require('colors')
const { demand } = require('yargs');
const { argv } = require('./config/yargs')

//let argv2 = process.argv;
console.log('....', argv)
//console.log(argv2)
// let parametro = process.argv[2];
// let base = parametro.split('=')[1];

let comando = argv._[0];
    console.log('limte:.'+argv.limite)


switch (comando) {
  case 'listar':
  listarTabla(argv.base, argv.limite);
    console.log('Listar')
    break;

  case 'crear':
    crearArchivo(argv.base, argv.limite)
      .then(archivo => console.log('archivo creado: ' + archivo))
      .catch(error => console.log(error))
    console.log('Crear')
    break;

  default:
    console.log('comando no reconocido')
}





// console.log()