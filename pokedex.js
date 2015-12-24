'use strict';

const get = require('./get.js');
const Pokemon = require('./pokemon.js');

const Pokedex = function(data){
  const name = function(){
    return data.name;
  };

  const all = function(){
    console.log('This function makes a lot of http requests. It is recommended to use Pokedex.search instead');
    return data.pokemon.map(function(pokemon){
      return get(pokemon.resource_uri)
        .then(function(data){
          return Pokemon(data);
        });
    });
  };

  const search = function(name){
    return data.pokemon.filter(function(pokemon){
      return pokemon.name === name;
    })
    .map(function(pokemon){
      return get(pokemon.resource_uri)
        .then(function(data){
          return Pokemon(data);
        });
    });
  };

  return {
    'name': name,
    'all': all,
    'search': search
  };
};

module.exports = Pokedex;
