
require('dotenv').config()

const express = require('express')

const models = require('./models/models')

const app = express()

const server = require('http').createServer(app)

app.use(express.urlencoded({extended: true}))

app.use(express.json())

app.use('/', (req, res) => {

    res.end('Procura Angola Server API V1 Running...')

})

server.listen(process.env.PORT, () => {
    console.log(`Server started on http://localhost:${process.env.PORT}`);
});


