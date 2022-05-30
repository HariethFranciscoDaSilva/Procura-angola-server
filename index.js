
require('dotenv').config()

const express = require('express')

const models = require('./models/models')

const app = express()

const server = require('http').createServer(app)

const cors = require('cors')

const { authorization } = require('./application/middlewar')

const routes = require('./routes/routes')

app.use(cors())

app.use(express.urlencoded({extended: true}))

app.use(express.json())

app.get('/', (req, res) => {

    res.send('Procura Angola Server API V1 Running...')

})

app.use('/api/v1', authorization, routes)

server.listen(process.env.PORT, () => {
    console.log(`Server started on http://localhost:${process.env.PORT}`);
});


