const http = require('http')

const comidas = {
    pratosFavoritos: 
    [{nome: "Batata frita",
descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
imagem: "img/Batata-frita.jpg"
},
{
nome: "Macarronada",
descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
imagem: "img/macarronada.jpg"
},
{
nome: "Falafel",
descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
imagem: "img/falafel.jpg"
},
{
nome: "Creme de abóbora",
descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
imagem: "img/creme-de-abobora.jpg"}]}

const servidor = http
    .createServer(function (request, response) { // create.Server é uma função que funciona atraves do http, ela recebe requisições e da resposta
        if (request.url === '/') {
            response.end('Hello mundo')
        } else if (request.url === '/comidas') {
            //response.end('entrei nas comida tudo SUCESSO')
            //se eu deixar o response aqui, a resposta do GET não sai, porque para nesse response antes

            if (request.method === 'GET') {
                response.writeHead(200, {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                })
                response.write(JSON.stringify(comidas))
            }
            response.end()
        } else if (request.method === 'POST') {
            response.writeHead(201, {
                "Content-Type": "text/html;charset=utf-8"
            })
            response.end("<h1> Resposta diferentona do post</h1>")

        }
    })
servidor.listen(3000) //portas altas acima de 3000

console.log('Servidor rodando na porta 3000')

