'use strict' // para que este dentro de la convencion emcmascript 6

const color = require('chalk')
const debug = require('debug')('front-end:demo')

let msg = 'Hola Mundo'
console.log(`El Mensaje es: ${color.yellow.bold(msg)}`)
