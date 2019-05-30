const express = require('express')

const comidas = {
    pratosFavoritos:[
    ]}
    const servidor= express()

    servidor.get("/comidas", (resquest, response) => {
response.send("EITAA PORRA FUNCIONOU!!!")
    })

servidor.listen(3000) //portas altas acima de 3000
console.log('Servidor rodando na porta 3000')