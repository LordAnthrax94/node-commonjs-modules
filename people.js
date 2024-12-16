const getNomeCompleto = require('./names.js');
const getHobbies = require('./hobbies.js');
let { log } = require('console')

function persona(){
 // getNomeCompleto = nomeCompleto('Andrea', 'Giannini')
 // getHobbies = hobbies('videogames','birdwatching','drinkingbeer')
  return {
    "fullName": nomeCompleto('Andrea', 'Giannini'),
    "hobbies": hobbies('videogames','birdwatching','drinkingbeer')
  }
}

log = persona()

