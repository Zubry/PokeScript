'use strict';

const get = require('./get.js');
const Pokemon = require('./pokemon.js');

const EggGroup = function(data){
  const id = function(){
    return data.id;
  };

  const name = function(){
    return data.name;
  };

  const pokemon = function(){
    return data.pokemon.map(function(p){
      return get(p.resource_uri)
        .then(function(data){
          return Pokemon(data);
        });
    });
  };

  const pokemon_primitive = function(){
    return data.pokemon.map(function(p){
      return p.name;
    });
  };

  return {
    'id': id,
    'name': name,
    'pokemon': pokemon,
    'pokemon_primitive': pokemon_primitive
  };
};

module.exports = EggGroup;
