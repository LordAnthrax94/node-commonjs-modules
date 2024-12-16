const getNomeCompleto = require('./names.js');
const getHobbies = require('./hobbies.js');
let { log } = require('console')

function persona(){
 
  return {
    "fullName": getNomeCompleto('Andrea', 'Giannini'),
    "hobbies": getHobbies('videogames','birdwatching','drinkingbeer')
  }
}

log(persona());

