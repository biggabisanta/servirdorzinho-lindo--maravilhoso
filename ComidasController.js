const repository = require('./ComidasRepositorios')
const comidas = { pratosFavoritos: []}

const getAll = () => {
   return comidas
}
const adicionar = (comida) => {
   comida.id = Math.random().toString(36).substr(-8)
   getAll().pratosFavoritos.push(comida)
}

const remove = (id) =>{
   let comidasRestantes = getAll()

  getAll().pratosFavoritos = comidasRestantes.pratosFavoritos.filter((comida)=>{

      return comida.id !== id  
   })
}

module.exports = {
   comidas,
   getAll,
   adicionar,
   remove
}