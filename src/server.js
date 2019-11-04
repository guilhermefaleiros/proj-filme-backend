const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')
const path = require('path')

const app = express()

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-6wgta.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//GET, POST, DELETE, PUT --> Métodos HTTP

// req.query => Acessar query params da URL (para filtros)
// req.params => Acessar route params da URL para (para edição e delete)
// req.body => Acessar corpo da requsição (criação ou edição de registros)

app.use(cors())
app.use(express.json())
app.use(routes)


app.listen(3333, ()=>{
    console.log('Server ligando...')
})