const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express()

app.use(cors())
app.use(express.json())

app.use(routes)
app.use(errors())
// Query params: Parâmetros nomeados enviados na rota após "?" (filtros paginação)
// Route Params: Parâmetros utilizados para identificar recursos
// Request Body: Corpo da requisição, utilizado para criar ou alterar recursos

module.exports = app;