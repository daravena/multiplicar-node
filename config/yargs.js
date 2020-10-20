const opts = {
  base: {
    demand: true,
    alias: 'b'
  },
  limite: {
    demand: true,
    alias: 'l',
    default: 5
  }
}
const argv = require('yargs')
  .command('listar', 'Imprime len consola la tabla de mualtiplicar', opts)
  .command('crear', 'crea la tabla de mualtiplicar', opts)
  .help()
  .argv;

  module.exports = { argv }