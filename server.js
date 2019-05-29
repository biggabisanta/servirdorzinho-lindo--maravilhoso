const http = require('http')

const servidor = http
    .createServer(function (request, response) { // create.Server é uma função que funciona atraves do http, ela recebe requisições e da resposta
        if (request.url === '/') {
            response.end('Hello mundo')
        } else if (request.url === '/comidas') {
            //response.end('entrei nas comida tudo SUCESSO')
            //se eu deixar o response aqui, a resposta do GET não sai, porque para nesse response antes

            if (request.method === 'GET') {
                response.writeHead(200, {
                    "Content-Type": "text/html;charset=utf-8"
                })
            }
            response.end("<h1> resposta do GET bem lindão </h1")
        } else if (request.method === 'POST') {
            response.writeHead(201, {
                "Content-Type": "text/html;charset=utf-8"
            })
            response.end("<h1> Resposta diferentona do post</h1>")
            
        }
    })
servidor.listen(3000) //portas altas acima de 3000

console.log('Servidor rodando na porta 3000')