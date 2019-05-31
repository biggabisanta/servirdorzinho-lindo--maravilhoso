const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const controller = require("./ComidasController")


const servidor = express()
servidor.use(cors())

servidor.get("/comidas", (resquest, response) => {
  response.send(controller.getAll())

})
servidor.post('/comidas', bodyParser.json(), (resquest, response) => {
  controller.adicionar(resquest.body)
  response.send(201)
})




servidor.listen(3000) //portas altas acima de 3000
console.log('Servidor rodando na porta 3000')