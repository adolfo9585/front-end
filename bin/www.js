'use strict' 

const http = require('http')
const path = require('path')

const express = require('express')
const chalk = require('chalk')
const socket = require('socket.io')
const debug = require('debug')('front-end:web')
const app = express()
const www = http.createServer(app)
const port = process.env.PORT||3000
const io = socket(www)

io.on('conect', socket =>{

    debug(`Socket.IO Client connected with id: ${chalk.yellow.bold(socket.id)}`)
})

//${chalk.green.bold('connected')}

app.use(express.static(path.join(__dirname, '../public')))

function handleFatalerror(err){
    console.log(`${chalk.red.bold('Error fatal')} ${err.message}`)
    console.log('Error Stack',err.stack)
    process.exit(1)
}

process.on('uncaughtExcetion', handleFatalerror)
process.on('unhadle', handleFatalerror)

www.listen(port, () =>{
    console.log(`servidor web escuchando en el puerto ${port}`)
})